<template>
  <div class="menu-wrapper">
    <div class="main-container-menu">
      <MenuLinks />
      <h2 class="current-menu-title">Beer</h2>
      <ItemMenuBox>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </ItemMenuBox>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/Menu/MenuItem.vue";
import ItemMenuBox from "@/components/Menu/ItemMenuBox.vue";
import MenuLinks from "@/components/Menu/MenuLinks.vue";

export default {
  name: "FoodMenu",
  components: { MenuItem, ItemMenuBox, MenuLinks },
  props: {},
};
</script>
<style lang="scss" scoped>
.menu-wrapper {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #444444;
}
.main-container-menu {
  max-width: 90%;
  margin: 0 auto;
}
.current-menu-title {
  padding: 40px 0px 20px 0px;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
}
</style>
