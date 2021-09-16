<template>
  <div class="order-container d-flex flex-column justify-content-between">
    <div>
      <div
        class="d-flex justify-content-between items-container"
        v-for="item of orderItems"
        :key="item.id"
      >
        <p class="title-container">{{ item.title }}</p>
        <div class="quantity-container d-flex justify-content-center">
          <div class="button-quantity-up" @click="changeQuantity($event, item)">
            <b-icon icon="arrow-up" data-icon="up"></b-icon>
          </div>
          <p>{{ item.quantity }}</p>
          <div
            class="button-quantity-down"
            @click="changeQuantity($event, item)"
          >
            <b-icon icon="arrow-down" data-icon="down"></b-icon>
          </div>
        </div>
        <p class="price-container d-flex justify-content-end">
          {{ item.price }}
        </p>
      </div>
    </div>

    <p class="no-products" v-if="!orderItems.length">
      You didn't choose any products
    </p>
    <div>
      <p class="total-price">
        Total price:
        {{ totalPrice }}
      </p>
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
    totalPrice() {
      return this.orderItems.reduce(
        (prev, next) => prev + parseInt(next.price),
        0
      );
    },
  },
  methods: {
    changeQuantity(event, dublicateItem) {
      let increment = event.target.dataset.icon === "up" ? true : false;
      this.$store.commit("addSameItem", {dublicateItem, increment });
    },
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  padding: 30px;
  font-size: 18px;
  font-weight: 700;
  background: rgb(175, 128, 41);
  color: rgb(53, 35, 12);
  border-radius: 10px;
  .quantity-container {
    width: 30%;
  }
  .total-price {
    float: right;
  }
  .title-container {
    width: 50%;
  }
  .quantity-container {
    width: 35%;

    .button-quantity-up {
      padding-right: 5px;
      cursor: pointer;
    }

    .button-quantity-down {
      padding-left: 5px;
      cursor: pointer;
    }
  }
  .price-container {
    width: 15%;
  }
  .no-products {
    font-size: 25px;
    text-align: center;
  }
  .total-price {
    padding-right: 20px;
  }
}
</style>
