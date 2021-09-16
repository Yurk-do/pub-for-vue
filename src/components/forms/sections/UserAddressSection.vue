<template>
  <b-row>
    <b-col>
      <b-form-group id="input-group-street" label="Street:" label-for="street">
        <b-form-input
          id="street"
          type="text"
          required
          placeholder="Type your street"
          v-model="userAddressData.street"
          @input="inputAdddress"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-2">
      <b-form-group id="input-group-house" label="House:" label-for="street">
        <b-form-input
          id="house"
          type="text"
          required
          @input="inputAdddress"
          v-model="userAddressData.house"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-2">
      <b-form-group id="input-group-flat" label="Flat:" label-for="flat">
        <b-form-input
          id="flat"
          type="text"
          required
          @input="inputAdddress"
          v-model="userAddressData.flat"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserAddressSection",
  data: () => ({}),
  computed: {
    userAddressData() {
      return {
        street: this.$store.getters.info.street,
        house: this.$store.getters.info.house,
        flat: this.$store.getters.info.flat,
      };
    },
  },
  methods: {
    inputAdddress() {
      this.$emit("input-user-address", this.userAddressData);
    },
  },
};
</script>

<style></style>
