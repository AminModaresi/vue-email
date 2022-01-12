<template>
  <div
    class="checkBox"
    :class="{ active: markCheckBox }"
    @click="markCheckBox = !markCheckBox"
  >
    <div class="checkBox__mark"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    markCheckBox: false,
  }),
  watch: {
    showSelected(value) {
      this.markCheckBox = value;
    },
  },
  computed: {
    showSelected() {
      return this.$store.getters.showSelected;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/variable/_var.scss";
.checkBox.active {
  background-color: $color-purple;
  .checkBox__mark {
    width: 10px;
    height: 10px;
    background-color: $color-white;
    border-radius: $circle;
  }
}
.checkBox {
  background-color: rgb(238, 242, 255);
  width: 20px;
  height: 20px;
  border-radius: $border-radius;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
}
</style>