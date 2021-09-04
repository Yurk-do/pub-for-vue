<template>
  <div
    class="login-form-link-container"
    @mouseover="changeColorLoginIn"
    @mouseout="changeColorLoginIn"
    @click="activateLoginForm"
  >
    <span>{{ LoginName }}</span>
    <img
      src="../../assets/images/icon-login-yellow.png"
      alt="icon"
      v-if="LoginInHover"
    />
    <img
      src="../../assets/images/icon-login-white.png"
      alt="icon"
      v-if="!LoginInHover"
    />
    <img
      src="../../assets/images/icon-login-out.png"
      alt="icon"
      v-if="LoginOut"
    />
  </div>
</template>

<script>
export default {
  name: "LoginFormLink",
  props: {
    LoginOutIsActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      LoginInHover: false,
      LoginOut: this.LoginOutIsActive,
    };
  },
  methods: {
    changeColorLoginIn() {
      this.LoginInHover = !this.LoginInHover;
    },
    activateLoginForm() {
      console.log(this.$store.state.loginForm);
      this.$store.commit("activateLoginForm");
      console.log(this.$store.state.loginForm);
    },
  },
  computed: {
    LoginName() {
      return this.LoginOut === true ? "Login Out" : "Login In";
    },
  },
};
</script>

<style lang="scss">
.login-form-link-container {
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #e2cc62;
  }
}
</style>
>
