<template lang="">
  <div class="dialog-block">
    <div class="dialog">
      <span class="close" @click="close">X</span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
  emits: ["close"],
};
</script>
<style lang="scss" scoped>
.dialog-block {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;

  .dialog {
    position: relative;
    border: 1px solid #929292;
    border-radius: 6px;
    padding: 100px;
    background: white;
    display: grid;
    width: 600px;
    margin: 0 auto;
    box-shadow: 10px 5px 5px #929292;
    .close {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
