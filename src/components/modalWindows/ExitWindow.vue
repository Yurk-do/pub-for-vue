<template>
  <div class="exit-window-container">
    <ButtonClose @close-window="canselExit" class="btn-close" />
    <p class="exit-window-title">Are you sure?</p>
    <div class="btns-container">
      <ButtonForm :buttonName="'Yes'" @button-click="confirmExit" />
      <ButtonForm :buttonName="'No'" is-cancel @button-click="canselExit" />
    </div>
  </div>
</template>

<script>
import ButtonClose from "@/components/buttons/ButtonClose.vue";
import ButtonForm from "@/components/buttons/ButtonForm.vue";

export default {
  name: "ExitWindow",
  components: { ButtonClose, ButtonForm },
  methods: {
    async confirmExit() {
      await this.$store.dispath.logout;
    },
    canselExit() {
      this.$store.commit("changeStatusExitWindow");
      console.log("exitWindow2", this.$store.state.exitWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
.exit-window-container {
  background: rgb(70, 43, 43);
  color: white;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 100px;
  right: 200px;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 21px 21px rgba(255, 255, 255, 0.54);
  -moz-box-shadow: 2px 2px 21px 21px rgba(255, 255, 255, 0.54);
  box-shadow: 2px 2px 21px 21px rgba(255, 255, 255, 0.54);
}
.btn-close {
  padding-left: 80%;
}

.exit-window-title {
  font-size: 25px;
  text-align: center;
  padding-bottom: 20px;
}

.btns-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
