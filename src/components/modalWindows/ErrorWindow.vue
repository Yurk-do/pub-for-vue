<template>
  <PopupContainer>
    <div class="error-window"></div>
  </PopupContainer>
</template>
<script>
import PopupContainer from "@/components/modalWindows/PopupContainer.vue";
export default {
  name: "ErrorWindow",
 components: {
    PopupContainer,
  },
};
</script>

<style>
.error-window {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 400px;
  left: 400px;
}
</style>
