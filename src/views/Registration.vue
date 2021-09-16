<template>
  <b-container class="registration-container">
    <b-container class="col-12 col-md-8">
      <h2 class="name-page">Registration</h2>
      <b-form @submit.prevent="submitHandler">
        <UserNamesSection
          @input-user-names="addInputData"
          class="form-section"
          last-name-activated
          :user-names-data="userNamesData"
        />
        <UserAddressSection
          @input-user-address="addInputData"
          class="form-section"
        />
        <UserContactsSection
          @input-user-contacts="addInputData"
          class="form-section"
          email-activated
        />
        <UserPasswordSection
          @input-user-password="addInputData"
          confirm-password-activated
          class="form-section d-flex flex-wrap"
        />
        <b-col class="d-flex justify-content-center mb-5">
          <ButtonForm :button-name="'submit'" class="col-2" />
          <ButtonForm :button-name="'clear'" is-cancel class="col-2" />
        </b-col>
      </b-form>
    </b-container>
  </b-container>
</template>
<script>
import UserNamesSection from "@/components/forms/sections/UserNamesSection.vue";
import UserAddressSection from "@/components/forms/sections/UserAddressSection.vue";
import UserContactsSection from "@/components/forms/sections/UserContactsSection.vue";
import UserPasswordSection from "@/components/forms/sections/UserPasswordSection.vue";
import ButtonForm from "@/components/buttons/ButtonForm.vue";

export default {
  name: "Registration",
  data: () => ({
    userNamesData: "",
    formData: {
      firstName: "",
      lastName: "",
      street: "",
      house: "",
      flat: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  }),
  components: {
    UserNamesSection,
    UserAddressSection,
    UserContactsSection,
    UserPasswordSection,
    ButtonForm,
  },
  methods: {
    async submitHandler() {
      const formData = { ...this.formData };
      this.$router.push("/");
      console.log(formData);
      try {
        await this.$store.dispatch("register", formData);
      } catch (e) {
        console.log(e);
      }
    },

    addInputData(inputData) {
      this.formData = { ...this.formData, ...inputData };
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-container {
  color: white;
  .name-page {
    margin: 30px 0px;
    text-align: center;
    font-size: 50px;
  }
  .form-section {
    margin-bottom: 40px;
  }
  .btns-section {
    width: 300px;
  }
}
</style>
