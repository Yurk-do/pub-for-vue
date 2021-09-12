<template>
  <b-container fluid-sm class="col-sm-11 menu-container-wrapper">
    <b-container
      fluid-sm
      class="col-sm-11 fluid-sm d-flex flex-column menu-main-container pt-4"
    >
      <div class="menu-categories-titles-container">
        <h3 class="link-category-menu" :class="{'active-category': categoryBeerIsActive}" @click="linkToBeer">Beer</h3>
        <h3 class="link-category-menu" :class="{'active-category': !categoryBeerIsActive}" @click="linkToWhiskey">Whiskey</h3>
      </div>

      <h2 class="title-current-category-menu">{{ categoryMenu }}</h2>
      <b-container class="d-flex justify-content-between mb-3">
        <SearchSection
          :search-category-menu="searchCategoryMenu"
          class="col-10 col-lg-5"
        />
        <div class="col-1 col-lg-6 d-flex justify-content-end">
          <b-icon
            @click="changeStatusFilter"
            icon="filter-square"
            font-scale="2"
          ></b-icon>
        </div>
      </b-container>
      <FilterSection
        v-if="filterIsActive"
        class="d-flex justify-content-start"
      />

      <b-container
        class="d-flex flex-wrap justify-content-between menu-items-container"
      >
        <ItemMenu
          class="col-12 col-lg-6 p-4"
          v-for="item in items"
          :key="item.id"
          :titleDrink="item.title"
          :styleFamily="item.family"
          :mainDescriptionDrink="item.description"
          :countryDrink="item.country"
          :price="item.price"
          :imageUrl="item.image"
          :categoryMenu="categoryMenu"
          @order-item="orderItem(item)"
          @delete-item="deleteItem(item)"
        />
      </b-container>
    </b-container>
  </b-container>
</template>
<script>
import FilterSection from "@/components/FilterSection.vue";
import ItemMenu from "@/components/menuDrinks/ItemMenu.vue";
import SearchSection from "@/components/SearchSection.vue";

export default {
  name: "FoodMenu",
  components: { ItemMenu, SearchSection, FilterSection },
  props: {},
  data() {
    return {
      filterIsActive: false,
    };
  },
  async mounted() {
    await this.$store.dispatch("requestMenuData");
  },

  computed: {
    items() {
      if (this.$route.params.category === "beer") {
        return this.$store.getters.getDataBeer;
      }
      return this.$store.getters.getDataWhiskey;
    },
    categoryMenu() {
      return this.$route.params.category;
    },
    searchCategoryMenu() {
      return "Search" + " " + this.categoryMenu;
    },
    categoryBeerIsActive() {
      return this.categoryMenu === "beer" ? true : false;
    }
  },

  methods: {
    orderItem(item) {
      item = { ...item };
      item.quantity = 1;
      this.$store.dispatch("addToOrderItemsList", item);
    },
    deleteItem(item) {
      this.$store.dispatch("deleteFromOrderItemsList", item);
    },
    linkToWhiskey() {
      if (this.categoryMenu !== "whiskey")
        this.$router.push({ params: { category: "whiskey" } });
    },
    linkToBeer() {
      if (this.categoryMenu !== "beer")
        this.$router.push({ params: { category: "beer" } });
    },
    changeStatusFilter() {
      this.filterIsActive = !this.filterIsActive;
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-container-wrapper {
  background-color: #444444;

  .menu-categories-titles-container {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    justify-items: space-between;

    .link-category-menu {
      padding: 0;
      margin: 0;
      text-align: center;
      width: 50%;
      font-size: 30px;
      line-height: 60px;
      cursor: pointer;

      &:first-child {
        border-right: 1px solid white;
      }
      &:hover {
        background: #e2cc62;
        color: black;
      }
    }
  }
  .active-category {
    background: #aa9111;
  }
  .title-current-category-menu {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    text-transform: uppercase;
  }

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
}
</style>
