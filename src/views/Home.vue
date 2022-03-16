<template>
  <div class="home">
    <h1>Таблица Пользователей</h1>
    <section>
      <div class="table-container">
        <div class="table-container-items">
          <Button
            title="Добавить"
            color="blue"
            size="lg"
            @click="openDialogAdd"
          />
          <div></div>
          <div class="search">
            <div class="btn-group-search">
              <Button title="Поиск" color="white" size="sm" @click="search" />
              <Button
                title="Сброс"
                color="red"
                size="sm"
                @click="resetSearch"
              />
            </div>
            <Input placeholder="Поиск" :value="Search" @update="updateSearch" />
          </div>
        </div>
        <Table
          :data="data"
          :SearchData="searchDatafilter"
          @editUser="editUser"
          @deliteUser="deliteUser"
          @filterData="filterData"
        />
      </div>
    </section>
    <ModalCreate
      @close="dialogAddClose"
      @create="createUser"
      v-if="dialogAdd"
    />
    <ModalEdit
      :data="dataEdit"
      @close="dialogEditClose"
      @save="saveUser"
      v-if="dialogEdit"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import { Search, Edit, Delete } from "@element-plus/icons-vue";
import ModalCreate from "../components/modal/ModalElementCreate.vue";
import ModalEdit from "../components/modal/ModalElementEdit.vue";
import Button from "../components/button/Button.vue";
import Input from "../components/input/Input.vue";
import Table from "../components/table/Table.vue";
export default {
  name: "Home",
  data() {
    return {
      SearchData: [],
      Search: "",
      SearchIco: Search,
      dialogAdd: false,
      dialogEdit: false,
      dataEdit: "",
      keyFilter: "id",
      dataUsers: [
        { id: 1, name: "Aгаев Иван Иванович", bithDay: "11.02.1981" },
        { id: 2, name: "Стойловский Петр Игоревич", bithDay: "12.01.1991" },
        { id: 3, name: "Сидоров Иван Петрович", bithDay: "11.07.1994" },
        { id: 4, name: "Рагушина Юлия Федоровна", bithDay: "21.08.1981" },
        { id: 5, name: "Самойлова Татьяна Николаевна", bithDay: "21.01.1971" },
        { id: 6, name: "Евланников Антон Павлович", bithDay: "11.02.2001" },
        { id: 7, name: "Стойловский Петр Игоревич", bithDay: "12.01.1992" },
      ],
    };
  },
  computed: {
    data() {
      switch (this.keyFilter) {
        case "default":
          return this.dataUsers;
        case "fio":
          return (this.dataUsers = this.dataUsers.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }));
        case "bithday":
          return (this.dataUsers = this.dataUsers.sort((a, b) => {
            if (new Date(a.bithDay).getTime() < new Date(b.bithDay).getTime()) {
              return 1;
            }
            if (new Date(a.bithDay).getTime() > new Date(b.bithDay).getTime()) {
              return -1;
            }
            return 0;
          }));
        case "id":
          return (this.dataUsers = this.dataUsers.sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          }));
      }
    },
    searchDatafilter() {
      switch (this.keyFilter) {
        case "default":
          return this.SearchData;
        case "fio":
          return (this.SearchData = this.SearchData.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }));
        case "bithday":
          return (this.SearchData = this.SearchData.sort((a, b) => {
            if (new Date(a.bithDay).getTime() < new Date(b.bithDay).getTime()) {
              return 1;
            }
            if (new Date(a.bithDay).getTime() > new Date(b.bithDay).getTime()) {
              return -1;
            }
            return 0;
          }));
        case "id":
          return (this.SearchData = this.SearchData.sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          }));
      }
    },
  },
  mounted() {
    const { sort, search } = this.$route.query;
    this.Search = search;
    this.keyFilter = sort || "id";
    this.search();
  },
  methods: {
    search() {
      this.SearchData = this.dataUsers.filter((el) => {
        if (el.name == this.Search.trim()) {
          return el;
        } else if (el.bithDay == this.Search.trim()) {
          return el;
        }
      });
    },
    resetSearch() {
      this.Search = "";
      this.SearchData = [];
    },
    filterData(key) {
      this.keyFilter = key;
    },
    saveUser(data) {
      this.dataUsers = this.dataUsers.map((user) => {
        if (user.id == data.id) {
          user = data;
        }
        return user;
      });
    },
    updateSearch(value) {
      this.Search = value;
    },
    editUser(data) {
      this.dataEdit = data;
      this.dialogEdit = true;
    },
    openDialogAdd() {
      this.dialogAdd = true;
    },
    dialogAddClose() {
      this.dialogAdd = false;
    },
    dialogEditClose() {
      this.dialogEdit = false;
    },
    createUser(value) {
      let maxId = Math.max(...this.dataUsers.map((i) => i.id));
      let newUser = {
        id: maxId + 1,
        name: value.name,
        bithDay: value.bithDay,
      };
      this.dataUsers.push(newUser);
    },
    deliteUser(id) {
      this.dataUsers = this.dataUsers.filter((User) => User.id !== id);
    },
  },
  components: {
    ModalCreate,
    Button,
    Input,
    ModalEdit,
    Table,
  },
};
</script>
<style scoped lang="scss">
section {
  padding: 20px;
  .table-btn-container {
    text-align: left;
  }
  .table-container {
  }
  .table-container-items {
    display: grid;
    grid-template-columns: auto 1fr 300px;
  }
  .search {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    .btn-group-search {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
    }
  }
}
</style>
