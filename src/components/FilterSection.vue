<template>
  <b-container class="mb-3 d-flex flex-column">
    <div class="mb-3">
      <b-dropdown
        v-for="fieldCategory of fieldFiltersCategories"
        :key="fieldCategory"
        size="md"
        :text="fieldCategory"
        class="mt-2 mb-2 mr-2"
      >
        <b-dropdown-item-button
          v-for="field in filterFields[fieldCategory]"
          :key="field"
          @click="choiceFieldForFilter(fieldCategory, field)"
          >{{ field }}</b-dropdown-item-button
        >
      </b-dropdown>
    </div>

    <div class="d-flex align-items-center">
      <p class="m-1">Filter by:</p>
      <p
        v-for="activeField in activeFields"
        :key="activeField"
        class="p-1 m-1 active-field"
      >
        {{ activeField }}
      </p>
      <p class="p-1 m-1 reset-button" v-if="activeFields.length" @click="resetFilterData">Reset</p>
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
    }
  },
};
</script>

<style lang="scss" scoped>
.active-field {
  background-color: blue;
  cursor: pointer;
}
.reset-button {
 
  background-color: red;
  cursor: pointer;

}
</style>
