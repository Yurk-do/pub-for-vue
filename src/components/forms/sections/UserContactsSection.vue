<template>
  <b-row>
    <b-col class="col-8">
      <b-form-group id="input-group-phone" label="Phone:" label-for="phone">
        <b-form-input
          id="phone"
          type="tel"
          required
          placeholder="Type yiur phone number"
          @input="inputContacts"
          v-model="userContactsData.phone"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-8" v-if="emailActivated">
      <b-form-group id="input-group-email" label="Email" label-for="email">
        <b-form-input
          id="email"
          type="email"
          required
          placeholder="Type your email"
          @input="inputContacts"
          v-model="userContactsData.email"
        >
        </b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserContactsSection",
  props: {
    emailActivated: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userContactsData: {
      phone: "",
      email: "",
    },
  }),
  methods: {
    inputContacts() {
      this.$emit("input-user-contacts", this.userContactsData);
    },
  },
};
</script>

<style></style>
