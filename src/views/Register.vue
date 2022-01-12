<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="register__content">
                <div class="register__position" :class="{'change-to-login' : login}">
                    <div class="row">
                        <div class="col-6">
                            <div :class="{'text-white' : login}" class="register__position_btn" @click="login = true">ورود</div>
                        </div>
                        <div class="col-6">
                            <div :class="{'text-white' : !login}" class="register__position_btn" @click="login = false">ثبت نام</div>
                        </div>
                    </div>
                </div>
                <keep-alive>
                    <component :is="login ? 'Login' : 'Singup'"></component>
                </keep-alive>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
const Login = defineAsyncComponent(() => import("../components/register/Login.vue"))
const Singup = defineAsyncComponent(() => import("../components/register/Signup.vue"))
export default {
    components : {
        Singup, 
        Login
    },
    data : () => ({
        login : false,
    }),

}
</script>
<style lang="scss" scoped>
@import "../assets/sass/register/register.scss";
</style>