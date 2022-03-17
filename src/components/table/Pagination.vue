<template lang="">
  <div class="pagination">
    <ul>
      <li
        v-for="(index, Page) in Pages"
        :key="index"
        @click="getPages(index)"
        :class="{ active: index == pageActive }"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { pageActive: 1 };
  },
  methods: {
    getPages(Page) {
      this.pageActive = Page;
      this.$emit("Switching", Page);
    },
  },
  mounted() {
    const { page } = this.$route.query;
    this.pageActive = page || 1;
  },
  computed: {
    isActive() {
      return true;
    },
  },
  props: {
    Pages: {
      type: Number,
      default: 1,
    },
  },
};
</script>
<style lang="scss">
.pagination {
  display: grid;
}
ul {
}
li {
  color: #929292;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  list-style: none; /* Убираем маркеры */
}
.active {
  border-bottom: 1px solid #929292;
}
</style>
