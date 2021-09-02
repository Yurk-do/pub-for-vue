<template>
  <div id="header-container">
    <router-link class="navbar-logo-container" to="/" tag="div">
      <img
        src="../../assets/images/logo.png"
        alt="logotype"
        name="logo image"
      />
    </router-link>
    <div id="navbar-container">
      <div id="navbar-order-container">
        <div class="btn-order btn-reservation">reservation</div>
        <div class="btn-order btn-delivery">order for delivery</div>
      </div>
      <div id="navbar-links-container">
        <router-link
          class="navbar-link"
          v-for="link in links"
          :to="link.path"
          :key="link.name"
          tag="div"
          >{{ link.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueHeader",
  props: {
    links: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#header-container {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 15px 40px 0px;
  justify-content: space-around;
}

.navbar-logo-container {
  max-width: 150px;
  max-height: 117px;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}

#navbar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#navbar-links-container {
  display: flex;
}

.navbar-link {
  text-align: center;
  margin: 20px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;

  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: #e2cc62;
  }

  &:before {
    content: "";
    display: block;
    height: 1px; /* Высота линии */
    background: #e2cc62; /* Цвет линии */
    width: 0px; /* Ширина линии до наведения */
    margin: 0 auto 10px; /* Отступ с боков по центру и снизу */
  }

  &:hover:before {
    width: 100%; /* Ширина линии при наведении */
    transition: ease-out 0.5s; /* Время, за которое линия расширяется при наведении */
  }

  &:after {
    content: "";
    display: block;
    height: 1px; /* Высота линии */
    background: #e2cc62; /* Цвет линии */
    width: 0px; /* Ширина линии до наведения */
    margin: 10px auto 0; /* Отступ с боков по центру и сверху */
  }
  &:hover:after {
    width: 100%; /* Ширина линии при наведении */
    transition: ease-out 0.5s; /* Время, за которое линия расширяется при наведении */
  }

  &.router-link-exact-active {
    color: #e2cc62;
  }
}

#navbar-order-container {
  display: flex;
  .btn-order {
    display: block;
    padding: 10px 40px;
    font-size: 18px;
    line-height: 18px;
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
}
</style>
