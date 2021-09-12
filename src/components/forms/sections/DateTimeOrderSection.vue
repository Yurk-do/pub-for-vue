<template>
  <b-row>
    <b-col class="col-4">
      <b-form-group id="input-group-date" label="Date:" label-for="date">
        <b-form-input
          id="date"
          type="date"
          required
          placeholder="Choice date"
          v-model="orderDateTime.date"
          @input="inputDateTime"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col class="col-4">
      <b-form-group id="input-group-time" label="Time:" label-for="time">
        <b-form-select
          id="time"
          v-model="orderDateTime.time"
          :options="options"
          @change="inputDateTime"
          class="form-control"
        ></b-form-select>
      </b-form-group>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "DateTimeOrderSection",
  data: () => ({
    options: [
      { value: null, text: "Please select time" },
      { value: "15.00 PM", text: "15.00 PM" },
      { value: "16.00 PM", text: "16.00 PM" },
      { value: "17.00 PM", text: "17.00 PM" },
      { value: "18.00 PM", text: "18.00 PM" },
      { value: "19.00 PM", text: "19.00 PM" },
      { value: "20.00 PM", text: "20.00 PM" },
      { value: "21.00 PM", text: "21.00 PM" },
      { value: "22.00 PM", text: "22.00 PM" },
      { value: "23.00 PM", text: "23.00 PM" },
    ],
    orderDateTime: {
      date: "",
      time: "",
    },
  }),
  methods: {
    inputDateTime() {
      this.$emit("input-date-time", this.orderDateTime);
    },
  },
};
</script>

<style lang="scss" scoped>
// #time {
//   padding: 8px 8px;
//   outline: none;
//   border-radius: 5px;
//   background-color: white;
// }
</style>
