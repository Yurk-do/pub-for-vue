import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FoodMenu from "../views/FoodMenu.vue";
import Specials from "../views/Specials.vue";
import News from "../views/News.vue";
import Events from "../views/Events.vue";
import GiftCards from "../views/GiftCards.vue";
import FAQ from "../views/FAQ.vue";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/FoodMenu",
    name: "Food Menu",
    component: FoodMenu,
  },
  {
    path: "/Specials",
    name: "Specials",
    component: Specials,
  },
  {
    path: "/News",
    name: "What's new",
    component: News,
  },
  {
    path: "/Events",
    name: "Events",
    component: Events,
  },
  {
    path: "/GiftCards",
    name: "Gift Cards",
    component: GiftCards,
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
