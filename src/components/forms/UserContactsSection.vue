<template>
  <b-row class="d-flex justify-content-center">
    <b-col class="col-md-3">
      <b-form-group id="input-group-phone" label="Phone:" label-for="phone">
        <b-form-input
          id="phone"
          type="tel"
          required
          placeholder="Type yiur phone number"
          @input="inputPhone"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-md-3">
      <b-form-group id="input-group-email" label="Email" label-for="email">
        <b-form-input
          id="email"
          type="email"
          required
          placeholder="Type your email"
          @input="inputEmail"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserContactsSection",
  data: () => ({
    userContactsData: {
      phone: "",
      email: "",
    }
  }),
  methods: {
    inputPhone(event) {
      this.userContactsData.phone = event;
      this.$emit("input-user-contacts", this.userContactsData);
    },
    inputEmail(event) {
      this.userContactsData.email = event;
      this.$emit("input-user-contacts", this.userContactsData);
    },
  },
};
</script>

<style></style>
