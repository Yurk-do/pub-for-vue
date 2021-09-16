<template>
  <b-container fluid-sm class="col-sm-11 menu-container-wrapper">
    <b-container
      fluid-sm
      class="col-sm-11 fluid-sm d-flex flex-column menu-main-container pt-4"
    >
      <SectionMenuTitlesCategories
        :current-category-menu="categoryMenu"
        @change-category-menu="changeCategoryMenu"
      />
      <h2 class="title-current-category-menu">{{ categoryMenu }}</h2>
      <b-container class="d-flex justify-content-between mb-3">
        <SearchSection
          :search-input-placeholder="searchInputPlaceholder"
          class="col-10 col-lg-5"
        />
        <div class="col-1 col-lg-6 d-flex justify-content-end filter-button">
          <b-icon
            @click="changeStatusWindowFilter"
            icon="filter-square"
            font-scale="2"
          ></b-icon>
        </div>
      </b-container>
      <FilterSection
        v-if="filterWindowIsActive"
        class="d-flex justify-content-start"
        :filterFields="filterFields"
        @choice-field-for-filter="choiceFieldForFilter"
      />

      <b-container
        class="d-flex flex-wrap justify-content-between menu-items-container"
      >
        <ItemMenu
          class="col-12 col-lg-6 p-4"
          v-for="item in itemsForRender"
          :key="item.id"
          :titleDrink="item.title"
          :styleFamily="item.family"
          :mainDescriptionDrink="item.description"
          :countryDrink="item.country"
          :volume="item.volume"
          :price="item.price"
          :strength="item.strength"
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
import FILTER_FIELDS from "@/helpers/filter/filterFields.js";
import SectionMenuTitlesCategories from "@/components/menuDrinks/SectionMenuTitlesCategories.vue";

export default {
  name: "FoodMenu",
  components: {
    ItemMenu,
    SearchSection,
    FilterSection,
    SectionMenuTitlesCategories,
  },
  props: {},
  data() {
    return {
      filterWindowIsActive: false,
    };
  },
  async mounted() {
    await this.$store.dispatch("requestMenuData");
  },

  computed: {
    itemsForRender() {
      return !this.itemsFromFilter?.length
        ? this.allMenuItems
        : this.itemsFromFilter;
    },
    allMenuItems() {
      return this.$store.getters.getDataMenuByCategory(this.categoryMenu);
    },
    itemsFromFilter() {
      return this.$store.getters.getMenuDataFilter;
    },
    categoryMenu() {
      return this.$route.params.category;
    },
    searchInputPlaceholder() {
      return "Search" + " " + this.categoryMenu;
    },

    filterFields() {
      return FILTER_FIELDS[this.categoryMenu];
    },
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
    changeCategoryMenu(newCategory) {
      newCategory = newCategory.toLowerCase().trim();
      if (this.categoryMenu !== newCategory) {
        this.$router.push({ params: { category: newCategory } });
      }
      this.$store.commit("resetFilterData");
    },

    changeStatusWindowFilter() {
      this.filterWindowIsActive = !this.filterWindowIsActive;
    },

    choiceFieldForFilter(fieldCategory, field) {
      if (this.$store.getters.getActiveFieldsForFilter.includes(field)) return;
      const filterData = {
        allMenuItems: this.allMenuItems,
        typeFilter: fieldCategory,
        valueFilter: field,
      };
      this.$store.dispatch("addToFilterMenuData", filterData);
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-container-wrapper {
  background-color: #444444;
  padding-bottom: 30px;

  .menu-main-container {
    margin-bottom: 30px;
  }

  .title-current-category-menu {
    color: rgb(187, 149, 23);
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    text-transform: uppercase;
  }
  .filter-button {
    color: white;
  }
}
</style>
