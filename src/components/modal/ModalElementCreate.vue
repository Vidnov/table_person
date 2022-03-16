<template lang="">
  <Modal @close="closeDialog">
    <h1>Создать нового пользователя</h1>
    <div class="input-content">
      <span>Фамилия Имя Отчество</span>
      <Input class="input" @update="update" placeholder="Введите ФИО" />
      <span>Укажите дату рождения</span>
      <InputDate class="input" @update="updateDate" />
    </div>

    <div class="allert" v-show="alert">
      <p>Не все данные заполненны</p>
    </div>
    <div class="btn-group">
      <Button title="Cоздать" @click="CreateUser" color="blue" size="sm" />
    </div>
  </Modal>
</template>
<script>
import Modal from "./Modal.vue";
import Input from "../input/Input.vue";
import InputDate from "../input/InputDate.vue";
import Button from "../button/Button.vue";
export default {
  components: {
    Button,
    Input,
    InputDate,
    Modal,
  },
  data() {
    return {
      dialogVisible: true,
      name: "",
      dateBith: "",
      alert: false,
    };
  },
  watch: {
    name() {
      this.alert = false;
    },
    dateBith() {
      this.alert = false;
    },
  },
  methods: {
    reset() {
      this.name = "";
      this.dateBith = "";
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$emit("close");
    },
    CreateUser() {
      const { name, dateBith } = this;
      if (name && dateBith) {
        let data = {
          name: name,
          bithDay: new Date(dateBith).toLocaleDateString(),
        };
        this.$emit("create", data);
        this.dialogVisible = false;
        this.$emit("close");
      } else {
        this.alert = true;
      }
    },
    closeAllert() {
      this.alert = false;
    },
    update(e) {
      this.name = e;
    },
    updateDate(value) {
      this.dateBith = value;
    },
  },
  emits: ["close", "create"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.input-content {
  width: 400px;
  margin: 0 auto;
  span {
    margin-bottom: 10px;
  }
  .input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.allert {
  color: red;
}
.btn-group {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 0 auto;
  margin-top: 10px;
  width: 200px;
}
</style>
