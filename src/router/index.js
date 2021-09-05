import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
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
    path: "/Menu",
    name: "Menu",
    component: Menu,
    // children: [
    //   {
    //     path: "boottles-cans",
    //     name: "boottles & cans",
    //     component: MenuBoottles,
    //   },
    //   { path: "drafts", name: "Drafts", component: MenuDrafts },
    //   { path: "food", name: "Food", component: MenuFood },
    //   { path: "spirits", name: "Spirits", component: MenuSpirits },
    //   {
    //     path: "wine-coctails",
    //     name: "Wine & Coctails",
    //     component: MenuWineCoctails,
    //   },
    // ],
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
