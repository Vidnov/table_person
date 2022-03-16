<template>
  <div>
    <input type="date" v-model="date" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  data() {
    return { date: "" };
  },
  watch: {
    date(value) {
      this.$emit("update", value);
    },
  },
  props: {
    placeholder: { type: String },
    value: { type: String },
  },
};
</script>
<style lang="scss" scoped>
input {
  height: 30px;
  width: 100%;
  border: 1px solid #929292;
  border-radius: 6px;
  padding-left: 10px;
  font-size: 14px;
  color: #929292;
}
input:focus {
  outline: none;
}
</style>
