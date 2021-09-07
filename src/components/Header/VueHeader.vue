<template>
  <div id="header">
    <div id="header-container">
      <LogoLink class="navbar-logo-container" />
      <div id="navbar-container">
        <div id="navbar-top-side-container">
          <div id="navbar-order-link-container">
            <ButtonOrder :button-name="'reservation'" />
            <ButtonOrder :button-name="'order for delivery'" />
          </div>
          <LoginFormLink />
          <ExitWindow v-if="exitWindowIsActive" />
          <ErrorWindow v-if="errorWindowisActive"  />
        </div>
        <NavbarPagesLinks :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOrder from "../buttons/ButtonOrder.vue";
import NavbarPagesLinks from "./NavbarPagesLinks.vue";
import LogoLink from "./LogoLink.vue";
import LoginFormLink from "../forms/LoginFormLink.vue";
import ExitWindow from "@/components/modalWindows/ExitWindow.vue";
import ErrorWindow from "@/components/modalWindows/ErrorWindow.vue";

export default {
  name: "VueHeader",
  components: {
    ButtonOrder,
    NavbarPagesLinks,
    LogoLink,
    LoginFormLink,
    ExitWindow,
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
    exitWindowIsActive() {
      return this.$store.state.exitWindow;
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
