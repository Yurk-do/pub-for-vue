<template>
  <div class="gift-cards">
    <router-link to="{name: 'Home'}">ssssssssssss</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: this.$router.params,
    }
  },
  methods: {
    see() {
      console.log(this.test)
    }
  }
}
</script>

