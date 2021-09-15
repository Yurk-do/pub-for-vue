<template>
  <div class="popup-container" :class="{black: isBlack}">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "PopupContainer",
  props: {
    isBlack: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(49, 46, 46, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.black {
  background: black;
}
</style>
