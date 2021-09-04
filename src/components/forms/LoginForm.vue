<template>
  <div class="popup-container">
    <form class="login-form-container">
      <ButtonClose @close-window="disactivateLoginForm" class="btn-close" />
      <h2 class="login-form-title">Login In</h2>
      <div class="login-form-input-container">
        <div class="input-box">
          <label for="user-first-name">Your Login:</label>
          <input
            type="text"
            name="user-login-name"
            id="user-login-name"
            required
          />
        </div>
        <div class="input-box">
          <label for="user-last-name">Your Password:</label>
          <input
            type="password"
            name="user-password"
            id="user-password"
            required
          />
        </div>
        <div class="button-container">
          <ButtonForm />
          <ButtonForm :is-cancel="true" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonForm from "@/components/buttons/ButtonForm.vue";
import ButtonClose from "@/components/buttons/ButtonClose.vue";
export default {
  name: "LoginForm",
  components: { ButtonClose, ButtonForm },
  data() {
    return {};
  },
  methods: {
    disactivateLoginForm() {
      this.$store.commit("disactivateLoginForm");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(49, 46, 46, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-close {
    padding-left: 88%;
  }

  .login-form-container {
    width: 400px;
    height: 500px;
    background-color: rgb(70, 43, 43);
    box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);
    -webkit-box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);
    -moz-box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);

    h2 {
      text-align: center;
      font-size: 40px;
      color: white;
      letter-spacing: 5px;
      margin-bottom: 60px;
      font-weight: bold;
    }
  }

  .login-form-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-box {
      max-width: 300px;
      height: 50px;
      margin-bottom: 50px;

      input {
        margin-top: 10px;
        color: white;
        width: 100%;
        border: 2px solid white;
        outline: none;
        background: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 18px;
      }

      label {
        padding-bottom: 10px;
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>
