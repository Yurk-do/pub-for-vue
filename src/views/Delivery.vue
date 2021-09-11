<template>
  <div>
    <h2 class="name-page">Delivery</h2>
    <b-container class="d-flex">
      <b-container class="d-flex flex-row justify-content-between h-100">
        <b-form @submit.prevent="submitHandler">
          <UserNamesSection @input-user-names="addInputData" @focus="test" />
          <UserAddressSection
            @input-user-address="addInputData"
            class="form-section"
          />
          <UserContactsSection
            @input-user-contacts="addInputData"
            class="form-section"
          />
          <DateTimeOrderSection @input-date-time="addInputData" />
          <b-col class="d-flex justify-content-end">
            <ButtonForm :button-name="'submit'" class="col-4" />
            <ButtonForm :button-name="'clear'" is-cancel class="col-4" />
          </b-col>
        </b-form>
      </b-container>
      <OrderSection />
    </b-container>
  </div>
</template>
<script>
import UserNamesSection from "@/components/forms/sections/UserNamesSection.vue";
import UserAddressSection from "@/components/forms/sections/UserAddressSection.vue";
import UserContactsSection from "@/components/forms/sections/UserContactsSection.vue";
import DateTimeOrderSection from "@/components/forms/sections/DateTimeOrderSection.vue";
import ButtonForm from "@/components/buttons/ButtonForm.vue";
import OrderSection from "@/components/order/OrderSection.vue";

export default {
  name: "Delivery",
  data: () => ({
    formData: {},
  }),
  async mounted() {},
  components: {
    UserNamesSection,
    UserAddressSection,
    UserContactsSection,
    ButtonForm,
    DateTimeOrderSection,
    OrderSection,
  },
  methods: {
    async submitHandler() {
      const formData = {
        firstName: this.formData.firstName,
        street: this.formData.street,
        house: this.formData.house,
        flat: this.formData.flat,
        phone: this.formData.phone,
        date: this.formData.date,
        time: this.formData.time,
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
.btns-section {
  margin-top: 20px;
  width: 300px;
}
.order-section {
  width: 100%;
  height: 50vh;
  background-color: white;
}
</style>
