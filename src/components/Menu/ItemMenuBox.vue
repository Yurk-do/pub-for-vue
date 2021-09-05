<template>
  <div id="second-conteiner-menu">
    <h2 class="title-conteiner-menu-section">
      IPA | Double IPA | Imperial IPA
    </h2>
    <div class="conteiner-menu-section">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMenuBox",
};
</script>

<style>
#second-conteiner-menu {
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-top: 0.1em solid;
}
.title-conteiner-menu-section {
  margin-left: auto;
  margin-right: auto;
}
.main-title-menu-section h2 {
  margin: 0.2em;
}
.conteiner-menu-section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  justify-items: left;
}
</style>
