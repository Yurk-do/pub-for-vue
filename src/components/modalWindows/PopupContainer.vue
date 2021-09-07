<template>
  <div class="popup-container">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "PopupContainer",
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
}
</style>
