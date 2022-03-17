<template lang="">
  <table class="table-container__table">
    <thead>
      <tr>
        <td @click="filterData('id')">ID</td>
        <td @click="filterData('fio')">ФИО</td>
        <td @click="filterData('bithday')">Дата рождения</td>
        <td>Изменить/Удалить</td>
      </tr>
    </thead>
    <tbody v-if="SearchData.length == 0">
      <tr v-for="User in data" :key="User.id">
        <label :for="User.id">
          <td v-if="Choise">
            <input
              type="checkbox"
              @change="ChoiseElement(User)"
              :id="User.id"
            />
          </td>
          <td v-else>
            {{ User.id }}
          </td>
        </label>
        <label :for="User.id">
          <td>{{ User.name }}</td>
        </label>
        <label :for="User.id">
          <td>{{ User.bithDay }}</td>
        </label>
        <td>
          <div class="btn-table">
            <Button
              title="Редактировать"
              @click="editUser(User)"
              color="blue"
              size="sm"
            />
            <Button
              title="Удалить"
              color="red"
              size="sm"
              @click="openWarning(User.id)"
            />
            <Warning
              v-show="idWarning == User.id"
              @answer_true="
                deliteUser(User.id);
                closeWarning();
              "
              @answer_false="closeWarning()"
            />
          </div>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="User in SearchData" :key="User.id">
        <label :for="User.id">
          <td v-if="Choise">
            <input
              type="checkbox"
              @change="ChoiseElement(User)"
              :id="User.id"
            />
          </td>
          <td v-else>
            {{ User.id }}
          </td>
        </label>
        <label :for="User.id">
          <td>{{ User.name }}</td>
        </label>
        <label :for="User.id">
          <td>{{ User.bithDay }}</td>
        </label>
        <td>
          <div class="btn-table">
            <Button
              title="Редактировать"
              @click="editUser(User)"
              color="blue"
              size="sm"
            />
            <Button
              title="Удалить"
              color="red"
              size="sm"
              @click="openWarning(User.id)"
            />
            <Warning
              v-show="idWarning == User.id"
              @answer_true="
                deliteUser(User.id);
                closeWarning();
              "
              @answer_false="closeWarning()"
            />
          </div>
        </td>
      </tr>
    </tbody>
    <div class="pagination-block">
      <Pagination :Pages="Pages" @Switching="Switching" />
    </div>
  </table>
</template>
<script>
import Warning from "../warning/Warning.vue";
import Pagination from "./Pagination.vue";
import Button from "../button/Button.vue";
export default {
  data() {
    return { ChoiseElem: [], idWarning: "" };
  },
  components: { Button, Pagination, Warning },
  methods: {
    openWarning(id) {
      if (!this.idWarning) this.idWarning = id;
    },
    closeWarning() {
      this.idWarning = "";
    },
    ChoiseElement(User) {
      let result = this.ChoiseElem.findIndex((el) => el.id == User.id);
      if (result < 0) {
        this.ChoiseElem.push(User);
      } else {
        this.ChoiseElem.splice(result, 1);
      }
      this.$emit("choise", this.ChoiseElem);
    },
    deliteUser(id) {
      this.$emit("deliteUser", id);
    },
    editUser(User) {
      this.$emit("editUser", User);
    },
    filterData(key) {
      this.$emit("filterData", key);
    },
    Switching(Page) {
      this.$emit("Switching", Page);
    },
  },
  props: {
    data: {
      type: Array,
    },
    SearchData: {
      type: Array,
    },
    Pages: {
      type: Number,
    },
    Choise: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.table-container__table {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 40px;
    border-bottom: 1px solid #f5f5f5;
  }
  td {
    text-align: left;
  }
  thead {
    tr {
      display: grid;
      grid-template-columns:
        minmax(min-content, 200px) minmax(500px, 1fr) 1fr
        minmax(200px, 200px);
      align-items: center;
      td {
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        color: #929292;
      }
    }
  }
  tbody {
    tr {
      display: grid;
      grid-template-columns:
        minmax(min-content, 200px) minmax(500px, 1fr) 1fr
        min-content;
      align-items: center;
      label {
        td {
          font-size: 14px;
          color: #5f5f5f;
        }
      }
    }
  }
  .pagination-block {
    display: grid;
    width: 100%;
    justify-content: end;
  }
}
.btn-table {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>
