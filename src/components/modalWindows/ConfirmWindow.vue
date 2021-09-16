<template>
  <div class="confirm-window-container">
    <ButtonClose @close-window="closeWindow" class="btn-close" />
    <b-container
      class="
        d-flex
        flex-column
        justify-content-between
        h-100
        p-5
        align-items-center
        content-container
      "
    >
      <p class="confirm-window-title">{{ name }}, are you sure ?</p>
      <div class="btns-container">
        <ButtonForm :buttonName="'Yes'" @button-click="confirmExit" />
        <ButtonForm :buttonName="'No'" is-cancel @button-click="closeWindow" />
      </div>
    </b-container>
  </div>
</template>

<script>
import ButtonClose from "@/components/buttons/ButtonClose.vue";
import ButtonForm from "@/components/buttons/ButtonForm.vue";

export default {
  name: "ConfirmWindow",
  components: { ButtonClose, ButtonForm },
  computed: {
    name() {
      if (this.$store.getters.info) {
        return this.$store.getters.info.firstName;
      }
      return "Unknown";
    },
  },
  methods: {
    async confirmExit() {
      await this.$store.dispatch("logout");
    },
    closeWindow() {
      this.$store.commit("changeStatusConfirmWindow");
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm-window-container {
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
  .btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .exit-window-title {
    font-size: 25px;
    text-align: center;
    padding-bottom: 20px;
  }
  .confirm-window-title {
    font-size: 20px;
  }
  .btns-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
