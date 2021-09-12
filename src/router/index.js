import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/menu/:category",
    name: "drink menu",
    component: () => import("../views/Menu.vue"),
    // params: { category: "beer" },
    // children: [{ path: "beer" }, { path: "whiskey" }],
  },
  {
    path: "/specials",
    name: "specials",
    component: () => import("../views/Specials.vue"),
  },
  {
    path: "/news",
    name: "what's new",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/giftCards",
    name: "gift Cards",
    component: () => import("../views/GiftCards.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/Registration.vue"),
  },
  {
    path: "/delivery",
    name: "order for delivery",
    component: () => import("../views/Delivery.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
