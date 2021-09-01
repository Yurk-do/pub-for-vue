<template>
  <div id="header-container">
    <router-link class="navbar-logo-container" to="/" tag="div">
      <img
        src="../images/logo-800-v2png-600x432.png"
        alt="logotype"
        name="logo image"
      />
    </router-link>
    <div id="navbar-container">
     <div id="navbar-links-container">
        <router-link
          class="navbar-link"
          v-for="link in links"
          :to="link.path"
          :key="link.name"
          tag="div"
          >{{ link.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueHeader",
  props: {
    links: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#header-container {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-between;
}

.navbar-logo-container {
  max-width: 150px;
  max-height: 100px;
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
}

#navbar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#navbar-links-container {
  display: flex;
}

.navbar-link {
  margin: 45px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}
</style>
