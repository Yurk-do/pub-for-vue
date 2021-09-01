<template>
  <div id="home">
    <p>Home</p>
    <div id="navbar-order-container">
      <button class="btn-order btn-reservation">reservation</button>
      <button class="btn-order btn-delivery">order for delivery</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>

#navbar-order-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 7%;
  .btn-order {
  display: block;
  padding: 20px 60px;
  font-size: 21px;
  font-weight: 700;
  border: solid 2px;
  margin-right: 1em;
  border-radius: 10px;
  background-color: black;
  color: white;
  opacity: 0.7;
  border-color: #e2cc62;

  &:hover {
    background-color: #e2cc62;
    color: #121212;
    transform: scale(1.1, 1.1);
    transition: all 0.6s ease;
    opacity: 1;
  }
}
}

</style>
