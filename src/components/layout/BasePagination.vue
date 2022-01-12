<template>
  <ul class="pagination mt-4 me-2">
    <li class="page-item">
      <a class="page-link" href="#" @click="changePage(1), addClass(0)">صفحه اول</a>
    </li>
    <li
      class="page-item"
      v-for="(rows, idx) in row"
      :key="rows"
      @click="changePage(rows.pageNum), addClass(idx)"
      :class="{ active: rows.done }"
    >
      <a class="page-link" href="#" data-v-7109a710=""
        >{{ rows.pageNum }}</a
      >
    </li>
    <li class="page-item">
      <a class="page-link" href="#" @click="changePage(row.length), addClass(row.length-1)">صفحه اخر</a>
    </li>
  </ul>
</template>
<script>
export default {
  emits: ["changePage"],
  props: ["row"],
  data: () => ({
    listItem: [],
  }),
  methods: {
    changePage(value) {
      this.$emit("changePage", value);
    },
    addClass(idx) {
      this.row.forEach((item) => {
        item.done = false;
      });
      this.row[idx].done = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/variable/_var.scss";
.page-item {
  &:first-child {
    .page-link {
      border-radius: 0;
      border-radius: 0 15px 15px 0;
    }
  }
  &:last-child {
    .page-link {
      border-radius: 0;
      border-radius: 15px 0 0 15px;
    }
  }
  .page-link {
    color: $color-text;
    font-size: $font-size;
    background-color: $color-indigo;
    &:focus {
      z-index: 3;
      color: $color-text;
      background-color: #e9ecef;
      outline: 0;
      box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.25);
    }
  }
  &.active {
    .page-link {
    background-color: $color-purple-light !important;
    border-color: $color-indigo;
      color: $color-white;
    }
  }
}
</style>