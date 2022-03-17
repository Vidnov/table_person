<template lang="">
  <div class="warning-block">
    <div class="warning">
      <h4>Вы действительно хотите удалить эллемент?</h4>
      <div class="btn-group">
        <Button color="red" title="Да" size="sm" @click="Answer(true)" />
        <Button color="blue" title="Нет" size="sm" @click="Answer(false)" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../button/Button.vue";
export default {
  components: { Button },
  methods: {
    Answer(answer) {
      if (answer) {
        this.$emit("answer_true");
      } else {
        this.$emit("answer_false");
      }
    },
  },
};
</script>
<style lang="scss">
.warning-block {
  z-index: 10;
  background-color: white;
  position: absolute;
  height: 150px;
  width: 300px;
  top: 40px;
  right: 0;
  border: 1px solid #929292;
  border-radius: 6px;
  padding: 10px;
  .warning {
    display: grid;
    grid-auto-rows: 1fr 1fr;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    height: 100%;

    .btn-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }
}
</style>
