<template>
  <div class="conteiner-menu-links">
    <div class="title-menu-links">
      <p>Beer</p>
    </div>
    <div class="title-menu-links">
      <p>Whiskey</p>
    </div>
    <div class="title-menu-links">
      <p>Food</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLinks",
};
</script>

<style lang="scss" scoped>
.conteiner-menu-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  height: 60px;
}
.title-menu-links {
  height: 100%;
  font-size: 20px;
  width: 100%;
  border-bottom: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:first-child {
    border-right: 2px solid;
  }
  &:last-child {
    border-left: 2px solid;
  }
  &:hover {
    background-color: rgb(184, 184, 28);
  }
  P {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
