<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-2 col-sm-4">
        <router-link class="inbox__link" to="/all-email">
          <font-awesome-icon icon="inbox"></font-awesome-icon>
          <span> صندوق ورودی </span>
        </router-link>
      </div>
      <div class="col-12 mb-2 col-sm-4">
        <router-link class="inbox__link" to="/d">
          <font-awesome-icon icon="notes-medical"></font-awesome-icon>
          <span> اجتماعی </span>
        </router-link>
      </div>
      <div class="col-12 mb-2 col-sm-4">
        <router-link class="inbox__link" to="/d">
          <font-awesome-icon icon="tag"></font-awesome-icon>
          <span> تبلیغات</span>
        </router-link>
      </div>
    </div>
  </div>
   <router-view></router-view>
</template>
<script>
export default {
  methods: {
    async getComments() {
      this.$router.push("inbox/all-email")
      await this.$store.dispatch("inbox/getComments");
    },
  },
  created() {
    this.getComments();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/inbox/inbox.scss";
</style>