<template>
  <button class="btn-form" :class="{ cancel: isCancel }" @click="$emit('button-click')">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      required: true,
      default: "button",
    },
    isCancel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-form {
  min-width: 100px;
  padding: 10px;
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
.cancel {
  border-color: rgb(148, 36, 36);
  &:hover {
    color: white;
    background-color: rgb(148, 36, 36);
  }
}
</style>
>
