<template>
  <div class="menu-wrapper">
    <div class="main-container-menu">
      <h2 class="current-menu-title">Beer</h2>
      <b-container
        class="d-flex flex-wrap justify-content-between menu-container"
      >
        <MenuItem
          class="col-12 col-lg-6 p-4"
          v-for="item in items"
          :key="item.id"
          :titleDrink="item.title"
          :styleFamily="item.family"
          :mainDescriptionDrink="item.description"
          :countryDrink="item.country"
          :price="item.price"
          :imageUrl="item.image"
          :categoryMenu="'whiskey'"
          @order-item="orderItem(item)"
          @delete-item="deleteItem(item)"
        />
      </b-container>
    </div>
    <div></div>
  </div>
</template>
<script>
import MenuItem from "@/components/menuFoodDrinks/MenuItem.vue";

export default {
  name: "FoodMenu",
  props: {},
  async mounted() {
    await this.$store.dispatch("requestMenuData");
  },
  data: () => ({}),
  computed: {
    items() {
      return this.$store.getters.getDataWhiskey;
    },
  },
  components: { MenuItem },

  methods: {
    orderItem(item) {
      item = { ...item };
      item.quantity = 1;
      this.$store.dispatch("addToOrderItemsList", item);
    },
    deleteItem(item) {
      this.$store.dispatch("deleteFromOrderItemsList", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.main-container-menu {
  background-color: rgb(33, 37, 41);
  color: white;
}
.current-menu-title {
  padding: 40px 0px 20px 0px;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
}

.menu-container {
  background-color: #000000;
}
</style>
