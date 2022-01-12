<template>
  <TheHeader />
  <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  methods: {
    checkToken() {
      let token = localStorage.getItem("token");
      if (token !== null) {
        this.$router.push("/main");
        this.$store.dispatch("register/getToken", token);
      }
    },
  },
  created() {
      this.checkToken()
  },
};
</script>
<style lang="scss">
@import "./assets/sass/app.scss";
@import "./assets/sass/grid.scss";
</style>
