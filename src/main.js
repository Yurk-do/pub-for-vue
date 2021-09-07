import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA81OIuSTP4rQz-v5GROzyplzCe9UWVIAo",
  authDomain: "pub-for-vue.firebaseapp.com",
  projectId: "pub-for-vue",
  storageBucket: "pub-for-vue.appspot.com",
  messagingSenderId: "1032600888910",
  appId: "1:1032600888910:web:7d29635269e2c89001451f",
  measurementId: "G-2BYJM5K9VQ",
};

firebase.initializeApp(firebaseConfig);

let app;


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
