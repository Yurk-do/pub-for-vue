<template>
  <div class="btn-order">{{ buttonName }}</div>
</template>

<script>
export default {
  name: "ButtonOrder",
  props: {
    buttonName: {
      type: String,
      required: true,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-order {
  display: block;
  padding: 10px 40px;
  font-size: 20px;
  font-weight: 500;
  border: solid 3px;
  margin-right: 15px;
  border-radius: 5px;
  color: #e2cc62;
  border-color: #e2cc62;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: #e2cc62;
    color: #121212;
    transform: scale(1.1, 1.1);
    transition: all 0.6s ease;
    opacity: 1;
  }
}
</style>
>
