<template>
  <div id="header">
    <div id="header-container">
      <LogoLink class="navbar-logo-container" />
      <div id="navbar-container">
        <div id="navbar-top-side-container">
          <div id="navbar-order-link-container">
            <ButtonOrder :button-name="'reservation'" />
            <router-link to="/delivery" tag="div">
              <ButtonOrder :button-name="'order for delivery'" />
            </router-link>
          </div>
          <LoginFormLink />
          <ConfirmWindow v-if="confirmWindowIsActive" />
          <ErrorWindow v-if="errorWindowisActive" />
        </div>
        <NavbarPagesLinks :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOrder from "@/components/buttons/ButtonOrder.vue";
import NavbarPagesLinks from "@/components/header/NavbarPagesLinks.vue";
import LogoLink from "@/components/header/LogoLink.vue";
import LoginFormLink from "@/components/forms/login/LoginFormLink.vue";
import ConfirmWindow from "@/components/modalWindows/ConfirmWindow.vue";
import ErrorWindow from "@/components/modalWindows/ErrorWindow.vue";

export default {
  name: "VueHeader",
  components: {
    ButtonOrder,
    NavbarPagesLinks,
    LogoLink,
    LoginFormLink,
    ConfirmWindow,
    ErrorWindow,
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
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError.code);
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  height: 147px;
}
#header-container {
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  padding: 15px 20px 0px 20px;
  justify-content: space-between;
}

#navbar-container {
  display: flex;
  flex-direction: column;
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

#navbar-top-side-container {
  display: flex;
  justify-content: space-between;
}

#navbar-order-link-container {
  display: flex;
}
</style>
