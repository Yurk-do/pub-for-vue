<template>
  <b-container class="mb-3 d-flex flex-column">
    <div class="mb-3">
      <b-dropdown
        v-for="fieldCategory of fieldFiltersCategories"
        :key="fieldCategory"
        size="md"
        :text="fieldCategory"
        class="mt-2 mb-2 mr-2 filter-drop-down"
      >
        <b-dropdown-item-button
          v-for="field in filterFields[fieldCategory]"
          :key="field"
          @click="choiceFieldForFilter(fieldCategory, field)"
          >{{ field }}</b-dropdown-item-button
        >
      </b-dropdown>
    </div>

    <div class="d-flex align-items-center flex-wrap">
      <p class="filter-by">Filter by:</p>
      <p
        v-for="activeField in activeFields"
        :key="activeField"
        class="active-field"
      >
        {{ activeField }}
      </p>
      <p
        class="reset-button"
        v-if="activeFields.length"
        @click="resetFilterData"
      >
        Reset
      </p>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "FilterSection",
  props: {
    filterFields: {
      type: Object,
    },
  },
  data: () => ({}),
  computed: {
    fieldFiltersCategories() {
      return Object.keys(this.filterFields);
    },
    activeFields() {
      return this.$store.getters.getActiveFieldsForFilter;
    },
  },

  methods: {
    choiceFieldForFilter(fieldCategory, field) {
      this.$emit("choice-field-for-filter", fieldCategory, field);
    },
    resetFilterData() {
      this.$store.commit("resetFilterData");
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-by {
  color: rgb(255, 196, 32);
  font-size: 18px;
}
.filter-drop-down {
  margin-right: 10px;
}
.active-field {
  background-color: rgb(235, 214, 95);
  border-radius: 10px;
  color: black;
  cursor: pointer;
  margin-left: 20px;
  padding: 5px 10px;
}
.reset-button {
   background-color: rgb(247, 109, 29) ;
  color: rgb(82, 59, 59);
  cursor: pointer;
  border-radius: 10px;
  margin-left: 30px;
  padding: 5px 20px;
  -webkit-box-shadow: 5px 5px 5px -5px rgba(255, 255, 255, 0.6);
  -moz-box-shadow: 5px 5px 5px -5px rgba(255, 255, 255, 0.6);
  box-shadow: 5px 5px 5px -5px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  &:hover {
    transform: scale(1.1,1.1);
    background-color: rgb(247, 109, 29) ;
  }

}
</style>
