<template>
  <b-container class="mb-3">
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
        @click="choiceFieldForFilter($event, field, fieldCategory)"
        >{{ field }}</b-dropdown-item-button
      >
    </b-dropdown>
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
  data: () => ({
    allActiveDataFilter: {},
  }),
  computed: {
    fieldFiltersCategories() {
      return Object.keys(this.filterFields);
    },
  },

  methods: {
    choiceFieldForFilter(event, field, fieldCategory) {
      if (!(fieldCategory in this.allActiveDataFilter)) {
        this.allActiveDataFilter[fieldCategory] = [];
      }
      this.allActiveDataFilter[fieldCategory].push(field);
      event.target.disabled = true;
      this.$emit("choice-field-for-filter", field, fieldCategory);
    },
  },
};
</script>

<style></style>
