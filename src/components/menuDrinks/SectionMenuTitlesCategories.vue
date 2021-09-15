<template>
  <div class="menu-categories-titles-container">
    <h3
      class="link-category-menu"
      :class="{ 'active-category': categoryMenuIsActive }"
      @click="changeCategoryMenu($event)"
    >
      Beer
    </h3>
    <h3
      class="link-category-menu"
      :class="{ 'active-category': !categoryMenuIsActive }"
      @click="changeCategoryMenu($event)"
    >
      Whiskey
    </h3>
  </div>
</template>

<script>
export default {
  name: "SectionMenuTitlesCategoris",
  props: {
    currentCategoryMenu: {
      type: String,
      default: "beer",
    },
  },
  computed: {
    categoryMenuIsActive() {
      return this.currentCategoryMenu === "beer" ? true : false;
    },
  },
  methods: {
    changeCategoryMenu(event) {
      this.$emit("change-category-menu", event.target.innerHTML);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-categories-titles-container {
  color: white;
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

</style>
