<template>
  <div id="app">
    <LoginForm v-if="loginFormIsActive" />
    <section id="header-container" :style="{ 'background-image': imagePath }">
      <VueNavbar
        :links="routesMainPages"
        v-if="navbarIsActive"
        :opacity="navbarOpacity"
      />
      <div class="board-for-page-title" v-if="topBoardIsActive">
        <h2 class="title-board">{{ titlesForHeadersPages }}</h2>
      </div>
    </section>
    <b-container>
      <router-view />
    </b-container>
    <VueFooter />
  </div>
</template>
<script>
import VueNavbar from "@/components/header/VueNavbar.vue";
import { routesMainPages } from "@/store/constants/routesMainPages.js";
import { PATHS_BACKGROUND_IMAGES } from "@/store/constants/pathBackgroundForTopPartPages.js";
import LoginForm from "@/components/forms/login/LoginForm.vue";
import TITLES_FOR_HEADERS from "@/store/constants/titlesForHeadersPages.js";
import VueFooter from "@/components/footer/VueFooter.vue";

export default {
  name: "App",
  components: { VueNavbar, LoginForm, VueFooter },
  data() {
    return {
      routesMainPages,
      PATHS_BACKGROUND_IMAGES,
      topBoardIsActive: true,
      navbarIsActive: true,
      navbarOpacity: false,
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
    window.addEventListener("scroll", this.hadlerScroll);
  },
  computed: {
    imagePath() {
      return PATHS_BACKGROUND_IMAGES[this.$route.name];
    },
    loginFormIsActive() {
      return this.$store.getters.getStatusLoginForm;
    },
    titlesForHeadersPages() {
      return TITLES_FOR_HEADERS[this.$route.name];
    },
  },
  methods: {
    scrollTop() {
      const currentScroll = document.documentElement.scrollTop;
      console.log(currentScroll);
    },
    hadlerScroll() {
      if (
        pageYOffset > 200 &&
        pageYOffset < 650 &&
        !this.$store.getters.getStatusMenuBurger
      ) {
        this.navbarIsActive = false;
      } else if (pageYOffset > 650) {
        this.navbarOpacity = true;
        this.navbarIsActive = true;
      } else {
        this.navbarOpacity = false;
        this.navbarIsActive = true;
      }
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

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    #header-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      height: 90vh;
      width: 100%;
      .board-for-page-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 200px;
        background-image: url(./assets/images/row-for-tittle-page.jpg);
        background-position: fixed;
        opacity: 0.7;
        z-index: 1;

        .title-board {
          font-size: 40px;
          text-align: center;
          color: rgb(252, 252, 0);
        }
      }
    }
    #footer {
      color: white;
      font-size: 30px;
    }
  
  }
}
</style>
