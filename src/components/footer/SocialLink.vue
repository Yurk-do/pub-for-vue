<template>
  <div>
    <a :href="linkPath">
      <b-icon
        :icon="iconName"
        color="white"
        font-scale="1.5"
        class="icon"
      ></b-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    linkPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  color: rgb(207, 150, 27);
}
</style>
