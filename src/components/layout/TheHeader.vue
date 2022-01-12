<template>
  <header class="header">
    <div class="header-right">
      <div class="header__icon">
        <font-awesome-icon icon="exchange-alt"></font-awesome-icon>
      </div>
      <div class="header__icon">
        <font-awesome-icon icon="cog"></font-awesome-icon>
      </div>
      <div class="header__icon">
        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
      </div>
      <div class="header__profile" v-if='showToken'>
        <img
          src="../../assets/images/header/original-profile-picture-ideas-man_31.jpg"
          class="header__profile_img"
          @click="showProfile = !showProfile"
          alt=""
        />
        <div class="dropdown-custom shadow" v-show="showProfile">
            <ul class="dropdown-custom__list">
              <li class="dropdown-custom__list_item" @click="logout()">
                <span>خروج</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="header-center d-none d-lg-block">
      <input type="text" class="header__search d-none d-lg-block" placeholder="سرچ کردن">
    </div>
    <div @click="toggleMenu()" class="d-lg-none d-block">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
  </header>
</template>
<script>
export default {
  data : () => ({
    showProfile : false,
  }),
  methods : {
    logout(){
      this.$store.dispatch("register/logout" , "")
      this.$router.push("/register");
      this.showProfile = false
    },
    toggleMenu(){
      this.$store.dispatch("toggleSidebar")
    }
  },
  computed :{
    showToken(){
      return this.$store.getters['register/showToken']
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/layout/header.scss";
</style>