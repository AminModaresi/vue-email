<template>
  <div class="register__form">
    <div :class="{ 'not-valid': !name.valid }" class="register__form_content">
      <label for="name">نام :</label>
      <input
        v-model.trim="name.value"
        @blur="unValid('name')"
        type="text"
        id="name"
      />
      <p>لطفا ورودی را پر کنید</p>
    </div>
    <div :class="{ 'not-valid': !email.valid }" class="register__form_content">
      <label for="email">ایمیل :</label>
      <input
        v-model.trim="email.value"
        @blur="unValid('email')"
        type="email"
        id="email"
      />
      <p>لطفا ورودی را پر کنید</p>
    </div>
    <div
      :class="{ 'not-valid': !password.valid }"
      class="register__form_content"
    >
      <label for="password">رمز ورود :</label>
      <input
        v-model.trim="password.value"
        @blur="unValid('password')"
        type="password"
        id="password"
      />
      <p>لطفا ورودی را پر کنید</p>
    </div>
    <div
      :class="[
        { 'not-valid': !passwordTow.valid },
        { 'not-same': !passwordTow.notSame },
      ]"
      class="register__form_content"
    >
      <label for="passwordTow">تکرار رمز ورود :</label>
      <input
        v-model.trim="passwordTow.value"
        type="password"
        @blur="unValid('passwordTow')"
        id="passwordTow"
      />
      <p>لطفا ورودی را پر کنید</p>
      <p>رمز های ورودی مشابه نیست</p>
    </div>
    <button class="btn btn-purple mt-4" @click="register()">ثبت نام</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    error : "" ,
    isValid: true,
    name: {
      value: "",
      valid: true,
    },
    email: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
    passwordTow: {
      value: "",
      valid: true,
      notSame: true,
    },
  }),
  methods: {
    unValid(value) {
      this[value].valid = true;
    },
    async register() {
      this.isValid = true;
      if (this.name.value == "") {
        this.isValid = false;
        this.name.valid = false;
      }
      if (this.email.value == "" || !this.email.value.includes("@")) {
        this.isValid = false;
        this.email.valid = false;
      }
      if (this.password.value == "" || this.password.value.length < 6) {
        this.isValid = false;
        this.password.valid = false;
      }
      if (this.passwordTow.value == "") {
        this.isValid = false;
        this.passwordTow.valid = false;
      }
      if (this.passwordTow.value !== this.password.value) {
        this.isValid = false;
        this.passwordTow.notSame = false;
      }
      if (this.isValid == true) {
        this.error = ""
        const data = {
          email: this.email.value,
          password: this.password.value,
          name: this.name.value,
          returnSecureToken : true
        };
        try {
          await this.$store.dispatch("register/singup", data);
        } catch (e){
          this.error = e
          if(this.error == "Error: EMAIL_EXISTS"){
            this.error = "ایمیل یک بار استفاده شده است "
          }
           this.$toast.error(this.error , {
              position: "top",
          });
        }
        if(!this.error){
          this.$router.push("/main")
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/register/registerForm.scss";
</style>