<template>
  <b-row class="d-flex flex-row justify-content-center">
    <b-col class="col-md-3">
      <b-form-group
        id="input-group-password"
        label="Password"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          required
          placeholder="Type your password"
          @input="inputPassword"
        >
        </b-form-input></b-form-group
    ></b-col>
    <b-col class="col-md-3"
      ><b-form-group
        id="input-group-confirm-password"
        label="Confirm password:"
        label-for="confirm-password"
      >
        <b-form-input
          id="confirm-password"
          type="password"
          required
          @input="inputRepeatPassword"
          placeholder="Repeat your password"
        >
        </b-form-input></b-form-group
    ></b-col>
  </b-row>
</template>

<script>
export default {
  data: () => ({
    userPasswordData: {
      password: "",
      repeatPassword: "",
    },
  }),
  methods: {
    inputPassword(event) {
      this.userPasswordData.password = event;
      this.$emit("input-user-password", this.userPasswordData);
    },
    inputRepeatPassword(event) {
      this.userPasswordData.repeatPassword = event;
      this.$emit("input-user-password", this.userPasswordData);
    },
  },
};
</script>

<style></style>
