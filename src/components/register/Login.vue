<template>
    <div class="register__form">
        <div class="register__form_content" :class="{ 'not-valid': !email.valid }" >
            <label for="email">ایمیل :</label>
            <input v-model.trim="email.value" @blur="unValid('email')" type="email" id="email">
            <p>لطفا ورودی را پر کنید</p>
        </div>
        <div class="register__form_content" :class="{ 'not-valid': !email.valid }" >
            <label for="password">رمز ورود :</label>
            <input v-model.trim="password.value" @blur="unValid('email')" type="password" id="password">
            <p>لطفا ورودی را پر کنید</p>
        </div>
        <button @click="register()" class="btn btn-purple">
            ورود
        </button>
    </div>
</template>
<script>
export default {
  data: () => ({
    error : "" ,
    isValid: true,
    email: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
  }),
  methods: {
    unValid(value) {
      this[value].valid = true;
    },
    async register() {
      this.isValid = true;
      if (this.email.value == "" || !this.email.value.includes("@")) {
        this.isValid = false;
        this.email.valid = false;
      }
      if (this.password.value == "" || this.password.value.length < 6) {
        this.isValid = false;
        this.password.valid = false;
      }
      if (this.isValid == true) {
        this.error = ""
        const data = {
          email: this.email.value,
          password: this.password.value,
          returnSecureToken : true
        };
        try {
          await this.$store.dispatch("register/login", data);
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
        this.$toast.success("ورود با موفقیت انجام شد :)", {
              position: "top",
          });
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