<template>
  <b-container class="mb-3">
    <b-dropdown size="md" text="Price" class="mt-2 mb-2 mr-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here</b-dropdown-item-button>
    </b-dropdown>
    <b-dropdown size="md" text="Type" class="m-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here</b-dropdown-item-button>
    </b-dropdown>
    <b-dropdown size="md" text="Strength" class="mt-2 mb-2 mr-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here</b-dropdown-item-button>
    </b-dropdown>
  </b-container>
</template>

<script>
export default {
  name: "FilterSection",
  props: {
    searchCategoryMenu: {
      type: String,
      default: "Search",
    },
  },
  data: () => ({
    selected: null,
    options: [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option" },
      { value: { C: "3PO" }, text: "This is an option with object value" },
      { value: "d", text: "This one is disabled", disabled: true },
    ],
  }),
};
</script>

<style></style>
