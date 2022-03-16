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
        <td>{{ User.id }}</td>
        <td>{{ User.name }}</td>
        <td>{{ User.bithDay }}</td>
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
              @click="deliteUser(User.id)"
            />
          </div>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="User in SearchData" :key="User.id">
        <td>{{ User.id }}</td>
        <td>{{ User.name }}</td>
        <td>{{ User.bithDay }}</td>
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
              @click="deliteUser(User.id)"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Button from "../button/Button.vue";
export default {
  components: { Button },
  methods: {
    deliteUser(id) {
      this.$emit("deliteUser", id);
    },
    editUser(User) {
      this.$emit("editUser", User);
    },
    filterData(key) {
      this.$emit("filterData", key);
    },
  },
  props: {
    data: {
      type: Array,
    },
    SearchData: {
      type: Array,
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
      td {
        font-size: 14px;
        color: #5f5f5f;
      }
    }
  }
}
.btn-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>
