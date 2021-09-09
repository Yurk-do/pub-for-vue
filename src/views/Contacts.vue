<template>
  <div>
    <button @click="test">Test</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    async test() {
     const userId = await this.$store.dispatch("getUserId");
     console.log(userId);
     console.log(this.$store.state.userAuth)
    }
  }
};
</script>
<style scoped="scss">

</style>
