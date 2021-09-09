<template>
  <div
    class="login-form-link-container"
    @mouseover="changeColorLoginIn"
    @mouseout="changeColorLoginIn"
    @click="activateLoginForm"
  >
    <span :class="{ 'login-out-color': LoginInIsActive }">{{
      LoginStatus
    }}</span>
    <img
      src="../../../assets/images/icon-login-yellow.png"
      alt="icon"
      v-if="LoginInHover && !LoginInIsActive"
    />
    <img
      src="../../../assets/images/icon-login-white.png"
      alt="icon"
      v-if="!LoginInHover && !LoginInIsActive"
    />
    <img
      src="../../../assets/images/icon-login-out.png"
      alt="icon"
      v-if="LoginInIsActive"
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
     if (!this.LoginInIsActive) {
       this.$store.commit("changeStatusLoginFormWindow");
        } else {
       this.$store.commit("changeStatusConfirmWindow");
      }
    },
  },
  computed: {
    LoginStatus() {
      return this.LoginInIsActive === true ? "Login Out" : "Login In";
    },
    LoginInIsActive() {
      return this.$store.getters.getStatusUserAuth;
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
