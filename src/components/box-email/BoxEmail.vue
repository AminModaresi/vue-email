<template>
  <main class="main">
    <div class="action">
      <div
        class="checkBox"
        :class="{ active: showSelected }"
        @click="selectAllCheckBox()"
      >
        <div class="checkBox__mark"></div>
      </div>
      <div class="action__icon">
          <font-awesome-icon icon="redo-alt"/>
      </div>
      <div class="action__icon">
          <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  data: () => ({
    selectAll: false,
  }),
  methods : {
    selectAllCheckBox(){
      this.$store.dispatch("selectAllCheckBox")
    }
  },
  computed :{ 
    showSelected(){
      return this.$store.getters.showSelected
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/box-email/boxemail.scss";
</style>