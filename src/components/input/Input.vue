<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      @input="update"
      v-model="text"
    />
  </div>
</template>
<script>
export default {
  data() {
    return { text: this.$props.value };
  },
  methods: {
    update(e) {
      this.$emit("update", e.target.value);
    },
  },
  props: {
    placeholder: { type: String },
    value: {
      type: String,
    },
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
