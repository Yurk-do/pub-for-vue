<template>
  <div>
    <li class="contact-row d-flex">
      <b-icon :icon="iconTitle" color="white" font-scale="1.5" class="icon"/>
      <p class="contact-data">{{ contactData }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "ContactRow",
  props: {
    iconTitle: {
      type: String,
      required: true,
    },
    contactData: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact-row {
  color: white;
  .contact-data {
    margin-left: 15px
  }
  .icon {
    color: rgb(207, 150, 27)
  }
}
</style>
