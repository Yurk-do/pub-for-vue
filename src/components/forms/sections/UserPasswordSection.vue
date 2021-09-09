<template>
  <b-row>
    <b-col>
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
          v-model="userPasswordData.password"
        >
        </b-form-input></b-form-group
    ></b-col>
    <b-col v-if="confirmPasswordActivated"
      ><b-form-group
        id="input-group-confirm-password"
        label="Confirm password:"
        label-for="confirm-password"
      >
        <b-form-input
          id="confirm-password"
          type="password"
          required
          placeholder="Repeat your password"
          @input="inputPassword"
          v-model="userPasswordData.repeatPassword"
        >
        </b-form-input></b-form-group
    ></b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserPasswordSection",
  props: {
    confirmPasswordActivated: { type: Boolean, default: false },
  },
  data: () => ({
    userPasswordData: {
      password: "",
      repeatPassword: "",
    },
  }),
  methods: {
    inputPassword() {
      this.$emit("input-user-password", this.userPasswordData);
    },
  },
};
</script>

<style></style>
