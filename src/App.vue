<template>
  <div id="app">
    <section
      id="main-background-pages-container"
      :style="{ 'background-image': imagePath }"
    >
      <VueHeader :links="routesMainPages" />
      <section id="content-wrapper">
        <router-view />
      </section>
    </section>
    <section class="content pages"></section>
    <LoginForm v-if="loginFormIsActive" />
    <footer id="footer">footer</footer>
  </div>
</template>
<script>
import VueHeader from "@/components/header/VueHeader.vue";
import { routesMainPages } from "@/store/constants/routesMainPages.js";
import { PATHS_BACKGROUND_IMAGES } from "@/store/constants/pathBackgroundForTopPartPages.js";
import LoginForm from "@/components/forms/login/LoginForm.vue";

export default {
  name: "App",
  components: { VueHeader, LoginForm },
  data() {
    return {
      routesMainPages,
      PATHS_BACKGROUND_IMAGES,
    };
  },
  async mounted() {
    await this.$store.dispatch("checkStatusUserAuth");
    if (
      this.$store.getters.getStatusUserAuth &&
      !Object.keys(this.$store.getters.info).length
    ) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  //   async mounted() {
  //   if (!Object.keys(this.$store.getters.info).length)
  //   const userStatus = await this.$store.dispatch("checkStatusUserAuth");
  //   if (!userStatus) {
  //     await this.$store.dispatch("fetchInfo")
  //   }
  // },
  computed: {
    imagePath() {
      return PATHS_BACKGROUND_IMAGES[this.$route.name];
    },
    loginFormIsActive() {
      return this.$store.getters.getStatusLoginForm;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/resetStyles.scss";
html,
body {
  background-image: url(./assets/images/home-bg.png);
  height: 100%;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

#main-background-pages-container {
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 100vh;
  width: 100%;
}

#content-wrapper {
  flex: 1 1 auto;
}

#footer {
  color: white;
  font-size: 30px;
}
#test {
  height: 3000px;
}
</style>
