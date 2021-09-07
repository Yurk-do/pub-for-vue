<template>
  <div>
    <h2 class="name-page">Registration</h2>
    <b-form @submit.prevent="submitHandler" class="d-flex flex-column">
      <UserNamesSection @input-user-names="addInputData" class="form-section" />
      <UserAddressSection
        @input-user-address="addInputData"
        class="form-section"
      />
      <UserContactsSection
        @input-user-contacts="addInputData"
        class="form-section"
      />
      <UserPasswordSection
        @input-user-password="addInputData"
        class="form-section"
      />
      <b-col class="d-flex justify-content-center">
        <ButtonForm :button-name="'submit'" class="col-2" />
        <ButtonForm :button-name="'clear'" is-cancel class="col-2" />
      </b-col>
    </b-form>
  </div>
</template>
<script>
import UserNamesSection from "@/components/forms/UserNamesSection.vue";
import UserAddressSection from "@/components/forms/UserAddressSection.vue";
import UserContactsSection from "@/components/forms/UserContactsSection.vue";
import UserPasswordSection from "@/components/forms/UserPasswordSection.vue";
import ButtonForm from "@/components/buttons/ButtonForm.vue";

export default {
  name: "Registration",
  data: () => ({
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
      const formData = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        street: this.formData.street,
        house: this.formData.house,
        flat: this.formData.flat,
        phone: this.formData.phone,
        email: this.formData.email,
        password: this.formData.password,
        repeatPassword: this.formData.repeatPassword,
      };
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
.name-page {
  margin: 30px 0px;
  text-align: center;
}
.form-section {
  margin-bottom: 40px;
}
.btns-section {
  width: 300px;
}
</style>
