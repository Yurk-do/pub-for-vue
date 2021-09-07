<template>
  <PopupContainer>
    <form class="login-form-container" @submit.prevent="submitHandler">
      <ButtonClose @close-window="disactivateLoginForm" class="btn-close" />
      <h2 class="login-form-title">Login In</h2>
      <div class="login-form-input-container">
        <div class="input-box">
          <label for="email">Your Email:</label>
          <input type="text" name="email" id="email" required v-model="email" />
        </div>
        <div class="input-box">
          <label for="user-last-name">Your Password:</label>
          <input
            type="password"
            name="user-password"
            id="user-password"
            required
            v-model="password"
          />
        </div>
        <div class="button-container">
          <ButtonForm type="submit" :buttonName="'Submit'" />
          <ButtonForm
            is-cancel
            :buttonName="'Clear'"
            @button-click="clearInput"
          />
        </div>
        <div class="registration-link-container" @click="disactivateLoginForm">
          <p>Not registered? Let do it now!</p>
          <router-link tag="p" to="/registration" class="registration-link"
            >Click here!</router-link
          >
        </div>
      </div>
    </form>
  </PopupContainer>
</template>

<script>
import ButtonForm from "@/components/buttons/ButtonForm.vue";
import ButtonClose from "@/components/buttons/ButtonClose.vue";
import PopupContainer from "@/components/modalWindows/PopupContainer.vue";

export default {
  name: "LoginForm",
  components: { ButtonClose, ButtonForm, PopupContainer },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    disactivateLoginForm() {
      this.$store.commit("changeStatusLoginForm");
    },
    clearInput() {
      this.email = "";
      this.password = "";
    },
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form-container {
  width: 400px;
  height: 500px;
  background-color: rgb(70, 43, 43);
  box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);
  -webkit-box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);
  -moz-box-shadow: -1px 3px 36px 21px rgba(146, 86, 30, 0.44);

  .btn-close {
    padding-left: 88%;
  }

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
  .registration-link-container {
    text-align: center;
    margin-top: 20px;
    color: white;
    font-size: 18px;
    font-weight: 700;
  }
  .registration-link {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    color: rgb(231, 132, 52);
    cursor: pointer;

    &:hover {
      transform: scale(1.3, 1.3);
    }
  }
}
</style>
