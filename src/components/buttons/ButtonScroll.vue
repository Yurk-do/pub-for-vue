<template>
  <div class="button-scroll" @click="scrollUp">
    <b-icon class="icon-scroll" icon="arrow-up-circle-fill"></b-icon>
  </div>
</template>

<script>
export default {
  name: "ButtonScroll",
  methods: {
    scrollUp() {
      let top = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
      if (top > 0) {
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease-in;
  .icon-scroll {
    color: rgb(231, 155, 41);
    font-size: 40px;
    @keyframes glowing {
      0% {
        background-color: #2ba805;
        box-shadow: 0 0 3px #2ba805;
      }
      50% {
        background-color: #49e819;
        box-shadow: 0 0 10px #49e819;
      }
      100% {
        background-color: #2ba805;
        box-shadow: 0 0 3px #2ba805;
      }
    }
  }
}
</style>
