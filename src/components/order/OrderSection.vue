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
      return this.$store.getters.getOrderItemsList;
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
