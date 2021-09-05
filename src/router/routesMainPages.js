import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Specials from "../views/Specials.vue";
import News from "../views/News.vue";
import Events from "../views/Events.vue";
import GiftCards from "../views/GiftCards.vue";
import FAQ from "../views/FAQ.vue";
import Contacts from "../views/Contacts.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Menu",
    name: "Food & drink menu",
    component: Menu,
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
