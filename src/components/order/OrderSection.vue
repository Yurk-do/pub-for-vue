<template>
  <div class="container">
    <div v-for="item of orderItems" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.price }}</p>
      <p>{{item.quantity}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSection",
  computed: {
    orderItems() {
      console.log(this.$store.getters.orderItemsListShortDescription);
      return this.$store.getters.orderItemsListShortDescription;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: green;
  color: blue;
}
</style>
