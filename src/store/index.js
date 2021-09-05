import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginForm: false,
    userAuth: false,
    exitWindow: false,
  },
  mutations: {
    activateLoginForm(state) {
      state.loginForm = true;
    },
    disactivateLoginForm(state) {
      state.loginForm = false;
    },
    changUserStatusAuth(state) {
      state.userAuth = !state.userAuth;
    },
    activateExitWindow(state) {
      state.exitWindow = true;
    },
    disactivateExitWindow(state) {
      state.exitWindow = false;
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
