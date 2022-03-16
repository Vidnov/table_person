<template>
  <button class="btn" :class="[color, size]">
    {{ title }}
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "lg",
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>
<style lang="scss">
.btn {
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: auto;
  border: none;
}
.lg {
  min-height: 40px;
  width: 100%;
}
.sm {
  min-height: 30px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.white {
  background-color: #fef0f0;
  color: #409eff;
}
.red {
  background: #c45656;
  color: white;
}
.blue {
  background-color: #409eff;
  color: white;
}
.blue:hover {
  background-color: #2791fc;
}
</style>
