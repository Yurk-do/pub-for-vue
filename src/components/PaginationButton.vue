<template>
  <div class="pagination-button" @click="$emit('pagination-button-click', buttonName)" >{{buttonName}}</div>
</template>

<script>
export default {
  name: "PaginationButton",
  props: {
    buttonName: [String, Number],
  },
};
</script>

<style>
.pagination-button {
  width: 40px;
  height: 40px;
  margin: 40px;
  cursor: pointer;
  line-height: 40px;
  border-radius: 50%;
  background-color: rgb(26, 24, 24);
  color: white;
  font-weight: 600;
  font-size: 20px;
}
.pagination-button:hover {
  background-color: rgb(117, 86, 86);
}
</style>
