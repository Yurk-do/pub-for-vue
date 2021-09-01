<template>
  <div id="app">
    <VueHeader :links="routes" />
    <router-view />
  </div>
</template>
<script>
import VueHeader from "./components/VueHeader.vue";
import { routes } from "./router/routes.js";

export default {
  name: "App",
  components: { VueHeader },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}

#app {
  position: relative;
  background: url(./images/bigstock-whiskey-v5.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 100vh;
  width: 100%;
}
</style>

Header
