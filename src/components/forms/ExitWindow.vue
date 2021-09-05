<template>
  <div class="exit-window-container">
    <ButtonClose @close-window="sayNo" class="btn-close" />
    <button @click="sayYes">Yes</button>
    <button @click="sayNo">No</button>
  </div>
</template>

<script>
import ButtonClose from "@/components/buttons/ButtonClose.vue";
export default {
  name: "ExitWindow",
  components: { ButtonClose },
  methods: {
    sayYes() {
        
      this.$store.commit("changUserStatusAuth");
      this.$store.commit("disactivateExitWindow");
      console.log("userStatus", this.$store.state.userAuth);
        console.log("exitWindow", this.$store.state.exitWindow);
    },
    sayNo() {
      
      this.$store.commit("disactivateExitWindow");
      console.log("exitWindow2", this.$store.state.exitWindow);
    },
},
};
</script>

<style lang="scss" scoped>
button {
  padding: 20px;
}
</style>
