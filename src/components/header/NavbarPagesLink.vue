<template>
  <div id="navbar-links-container">
    <router-link
      class="navbar-link"
      v-for="link in links"
      :to="{name: link.name, params: link.params}"
      :key="link.name"
      tag="div"
      :exact="link.exact"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavbarPagesLink",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar-links-container {
  display: flex;

  .navbar-link {
    text-align: center;
    margin: 20px 20px;
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    flex-shrink: 0;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #e2cc62;
    }

    &:before {
      content: "";
      display: block;
      height: 1px;
      background: #e2cc62;
      width: 0px;
      margin: 0 auto 10px;
    }

    &:hover:before {
      width: 100%;
      transition: ease-out 0.5s;
    }

    &:after {
      content: "";
      display: block;
      height: 1px;
      background: #e2cc62;
      width: 0px;
      margin: 10px auto 0;
    }
    &:hover:after {
      width: 100%;
      transition: ease-out 0.5s;
    }

    &.router-link-exact-active {
      color: #e2cc62;
    }
  }
}
</style>
>
