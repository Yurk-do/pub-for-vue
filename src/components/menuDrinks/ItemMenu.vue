<template v-slot:default>
  <div class="menu-item-container">
    <div menu-item-header>
      <div class="menu-item-img-container">
        <img
          :src="require(`../../assets/images/${categoryMenu}/${imageUrl}`)"
          class="menu-item-img"
        />
      </div>
      <div>
        <h3 class="menu-item-title">
          {{ titleDrink }}
        </h3>
        <h4 class="menu-item-family">Style Family: {{ styleFamily }}</h4>
        <div class="menu-item-country">
          <span>Country: {{ countryDrink }}</span>
        </div>
      </div>
    </div>
    <p class="menu-item-description">
      {{ mainDescriptionDrink }}
    </p>
    <div class="menu-item-order-section">
      <button class="menu-item-order-button" @click="changeStatusItemOrder">
        {{ nameButtonOrder }}
      </button>
      <div class="menu-item-strength">
        <span>Strength: {{ strength }}</span>
      </div>
      <div class="menu-item-price">
        <span>Price: {{ volume }}/{{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMenu",
  props: {
    titleDrink: {
      type: String,
    },
    styleFamily: {
      type: String,
    },
    mainDescriptionDrink: {
      type: String,
    },
    countryDrink: {
      type: String,
    },
    price: {
      type: String,
    },
    volume: {
      type: String,
    },
    strength: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    categoryMenu: {
      type: String,
    },
  },
  computed: {
    nameButtonOrder() {
      return this.cancelIsActive ? "cancel order" : "order";
    },
  },
  methods: {
    changeStatusItemOrder() {
      if (!this.cancelIsActive) {
        this.$emit("order-item");
      } else {
        this.$emit("delete-item");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
  &:hover {
    -webkit-box-shadow: -6px 10px 61px 17px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: -6px 10px 61px 17px rgba(255, 255, 255, 0.2);
    box-shadow: -6px 10px 61px 17px rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transform: scale(1.1, 1.1);
    transition: 1s;
    z-index: 1;
  }
  .menu-item-img {
    max-width: 6em;
    float: left;
    margin: 0px 10px 10px 0px;
    &:hover {
      transform: scale(1.1, 1.1);
      transition: 1s;
    }
  }
  .menu-item-title {
    color: rgb(236, 170, 28);
  }
  .menu-item-family {
    color: rgb(198, 236, 28);
  }
  .menu-item-country {
    color: rgb(91, 207, 169);
    margin-bottom: 5px;
  }
  .menu-item-description {
    text-align: justify;
  }
  .menu-item-link-order {
    color: rgb(80, 80, 53);
  }
  .menu-item-strength {
    margin-right: 5px;
    margin-left: 5px;
  }
}
.menu-item-order-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .menu-item-order-button {
    border: none;
    border-radius: 30px;
    font-size: 1.5em;
    color: rgb(27, 27, 25);
    width: 150px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    overflow: hidden;
    transition: 0.5s;
    background-color: rgb(238, 133, 48);
    box-shadow: -3px -1px 10px 5px rgba(219, 192, 186, 0.23);

    &:hover {
      background-color: #b79346;
      color: white;
    }
  }
}
</style>
