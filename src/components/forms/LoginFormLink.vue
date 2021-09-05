<template>
  <div
    class="login-form-link-container"
    @mouseover="changeColorLoginIn"
    @mouseout="changeColorLoginIn"
    @click="activateLoginForm"
  >
    <span :class="{ 'login-out-color': LoginOutIsActive }">{{
      LoginStatus
    }}</span>
    <img
      src="../../assets/images/icon-login-yellow.png"
      alt="icon"
      v-if="LoginInHover && !LoginOutIsActive"
    />
    <img
      src="../../assets/images/icon-login-white.png"
      alt="icon"
      v-if="!LoginInHover && !LoginOutIsActive"
    />
    <img
      src="../../assets/images/icon-login-out.png"
      alt="icon"
      v-if="LoginOutIsActive"
    />
  </div>
</template>

<script>
export default {
  name: "LoginFormLink",
  data() {
    return {
      LoginInHover: false,
    };
  },
  methods: {
    changeColorLoginIn() {
      this.LoginInHover = !this.LoginInHover;
    },
    activateLoginForm() {
      if (!this.LoginOutIsActive) {
        this.$store.commit("activateLoginForm");
      } else {
        console.log(this.$store.state.exitWindow)
        this.$store.commit("activateExitWindow");
      }
    },
  },
  computed: {
    LoginStatus() {
      return this.LoginOutIsActive === true ? "Login Out" : "Login In";
    },
    LoginOutIsActive() {
      return this.$store.state.userAuth;
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
.login-out-color {
  color: #e2cc62;
}
</style>
>
