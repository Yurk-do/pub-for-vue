import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/specials",
    name: "Specials",
    component: () => import("../views/Specials.vue"),
  },
  {
    path: "/news",
    name: "What's new",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/giftCards",
    name: "Gift Cards",
    component: () => import("../views/GiftCards.vue"),
  },
  {
    path: "/faq",
    name: "FAq",
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
