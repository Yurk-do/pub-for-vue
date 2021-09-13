<template>
  <b-col>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        type="search"
        :placeholder="searchInputPlaceholder"
        class="search-section"
      ></b-form-input>
    </b-input-group>
  </b-col>
</template>

<script>
export default {
  name: "SearchSection",
  props: {
    searchInputPlaceholder: {
      type: String,
      default: "Search",
    },
  },
};
</script>

<style lang="scss" scoped>
.search-section {
  font-size: 16px;
}
</style>
