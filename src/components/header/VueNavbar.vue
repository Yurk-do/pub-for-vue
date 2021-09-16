<template>
  <div>
    <BurgerMenu :links="links" v-if="burgerMenuIsActive" class="burger-menu" />
    <div class="navbar">
      <div class="navbar-wrapper">
        <LogoLink class="navbar-logo-container" />
        <div class="navbar-container">
          <div class="navbar-top-side-container">
            <div class="navbar-order-links-container">
              <ButtonOrder :button-name="'reservation'" />
              <router-link to="/delivery" tag="div">
                <ButtonOrder :button-name="'order for delivery'" />
              </router-link>
            </div>
            <LoginFormLink />
            <ConfirmWindow v-if="confirmWindowIsActive" />
            <!-- <ErrorWindow v-if="errorWindowisActive" /> -->
          </div>
          <div class="navbar-pages-links-container">
            <NavbarPagesLink :links="links" />
          </div>
        </div>
        <div
          class="burger-menu-button"
          @click="changeStatusBurgerMenu"
          v-if="!burgerMenuIsActive"
        >
          <img src="@/assets/icons/burger-button.png" alt="icon" />
        </div>
        <ButtonClose
          class="burger-menu-button-close"
          v-if="burgerMenuIsActive"
          @close-window="changeStatusBurgerMenu"
        />
        <LoginFormLink class="login-form-link-burger-menu" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOrder from "@/components/buttons/ButtonOrder.vue";
import NavbarPagesLink from "@/components/header/NavbarPagesLink.vue";
import LogoLink from "@/components/LogoLink.vue";
import LoginFormLink from "@/components/forms/login/LoginFormLink.vue";
import ConfirmWindow from "@/components/modalWindows/ConfirmWindow.vue";
// import ErrorWindow from "@/components/modalWindows/ErrorWindow.vue";
import BurgerMenu from "@/components/header/BurgerMenu.vue";
import ButtonClose from "@/components/buttons/ButtonClose.vue";

export default {
  name: "VueHeader",
  components: {
    ButtonOrder,
    NavbarPagesLink,
    LogoLink,
    LoginFormLink,
    ConfirmWindow,
   
    BurgerMenu,
    ButtonClose,
  },
  props: {
    links: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },

  computed: {
    confirmWindowIsActive() {
      return this.$store.getters.getStatusConfirmWindow;
    },
    errorWindowisActive() {
      if (this.error !== null) return true;
      else {
        return false;
      }
    },
    burgerMenuIsActive() {
      return this.$store.getters.getStatusBurgerMenu;
    },
    error() {
      return this.$store.getters.error;
    },
  },

  watch: {
    error(fbError) {
      console.log(fbError.code);
    },
  },
  methods: {
    changeStatusBurgerMenu() {
      this.$store.commit("changeStatusBurgerMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  height: 147px;
  .navbar-wrapper {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    padding: 15px 20px 0px 20px;
    justify-content: space-between;
  }
  .navbar-logo-container {
    max-width: 150px;
    max-height: 117px;
    flex-shrink: 0;
    cursor: pointer;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .navbar-container {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-top-side-container {
    display: flex;
    justify-content: space-between;
  }

  .navbar-order-links-container {
    display: flex;
  }
  .navbar-pages-links-container {
    display: flex;
    justify-content: space-between;
  }
}
.burger-menu-button {
  cursor: pointer;
  display: none;
}

.burger-menu-button-close {
  margin-left: 20px;
  margin-top: 20px;
}
.login-form-link-burger-menu,
.burger-menu,
.burger-menu-button-close {
  display: none;
}
@media (max-width: 850px) {
  .navbar {
    height: 80px;
    background: black;
    .navbar-container,
    .navbar-logo-container {
      display: none;
    }
  }
  .burger-menu-button,
  .login-form-link-burger-menu,
  .burger-menu,
  .burger-menu-button-close {
    display: block;
  }
}
</style>
