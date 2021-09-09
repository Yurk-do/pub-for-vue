<template>
  <b-icon
    icon="x"
    scale="4"
    variant="white"
    id="icon"
    @click="disactivateWindow"
  ></b-icon>
</template>

<script>
export default {
  name: "ButtonClose",

  methods: {
    disactivateWindow() {
      this.$emit("close-window");
    },
  },
};
</script>

<style lang="scss">
#icon {
  opacity: 1;
  &:hover {
    transform: scale(1.3, 1.3);
    transition: 1s;
    cursor: pointer;
  }
}
</style>
>
