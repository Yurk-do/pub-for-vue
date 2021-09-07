<template>
  <b-row class="d-flex justify-content-center">
    <b-col class="col-4 col-md-4">
      <b-form-group id="input-group-street" label="Street:" label-for="street">
        <b-form-input
          id="street"
          type="text"
          required
          placeholder="Type your street"
          @input="inputStreet"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-md-1">
      <b-form-group id="input-group-house" label="House:" label-for="street">
        <b-form-input id="house" type="text" required @input="inputHouse">
        </b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-md-1">
      <b-form-group id="input-group-flat" label="Flat:" label-for="flat">
        <b-form-input id="flat" type="text" required @input="inputFlat">
        </b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserAddressSection",
  data: () => ({
    userAddressData: {
      street: "",
      house: "",
      flat: "",
    },
  }),
  methods: {
    inputStreet(event) {
      this.userAddressData.street = event;
      this.$emit("input-user-address", this.userAddressData);
    },
    inputHouse(event) {
      this.userAddressData.house = event;
      this.$emit("input-user-address", this.userAddressData);
    },
    inputFlat(event) {
      this.userAddressData.flat = event;
      this.$emit("input-user-address", this.userAddressData);
    },
  },
};
</script>

<style></style>
