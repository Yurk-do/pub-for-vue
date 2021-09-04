<template>
  <div class="btn-close" @click="disactivateWindow">
    <img src="../../assets/icons/icons8-multiply-50.png" alt="icon" />
  </div>
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
.btn-close {
  img:hover {
    transform: scale(1.3, 1.3);
    transition: 2s;
    cursor: pointer;
  }
}
</style>
>
