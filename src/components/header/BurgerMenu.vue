<template>
  <div class="burger-menu-container">
    <ul class="burger-menu-links-container">
      <router-link
        class="burger-menu-link"
        v-for="link in links"
        :to="{ name: link.name, params: link.params }"
        :key="link.name"
        tag="li"
        :exact="link.exact"
        >{{ link.name }}</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",

  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.burger-menu-container {
  padding-left: 60px;
  margin-top: 80px;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  text-transform: uppercase;
  z-index: 100;
}
.burger-menu-links-container {
  font-size: 40px;

  .burger-menu-link {
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
      color: rgb(214, 214, 65);
      transform: skew(-5deg, 0deg);
    }
  }
}
</style>
