<template>
  <b-row class="d-flex justify-content-center">
    <b-col class="col-md-3">
      <b-form-group
        id="input-group-first-name"
        label="First Name:"
        labe-for="first-name"
      >
        <b-form-input
          id="first-name"
          placeholder="Type your first name"
          required
          type="text"
          @input="inputFirstName"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-md-3">
      <b-form-group
        id="input-group-last-name"
        label="Last Name:"
        labe-for="last-name"
      >
        <b-form-input
          id="last-name"
          placeholder="Type your first name"
          required
          type="text"
          @input="inputLastName"
        ></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserNamesSection",
  data: () => ({
    userNamesData: {
      firstName: "",
      lastName: "",
    },
  }),
  methods: {
    inputFirstName(event) {
      this.userNamesData.firstName = event;
      this.$emit("input-user-names", this.userNamesData);
    },
    inputLastName(event) {
      this.userNamesData.lastName = event;
      this.$emit("input-user-names", this.userNamesData);
    },
  },
};
</script>

<style></style>
