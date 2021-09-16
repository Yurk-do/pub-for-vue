<template>
  <b-row>
    <b-col class="col-8 mb-3">
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
          @input="inputNames"
          v-model="userNamesData.firstName"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-8 mb-3" v-if="lastNameActivated">
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
          @input="inputNames"
          v-model="userNamesData.lastName"
        ></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserNamesSection",
  props: {
    lastNameActivated: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  computed: {
    userNamesData() {
      return {
        firstName: this.$store.getters.info.firstName,
        lastName: this.$store.getters.info.lastName,
      };
    },
  },
  methods: {
    inputNames() {
      this.$emit("input-user-names", this.userNamesData);
    },
  },
};
</script>

<style></style>
