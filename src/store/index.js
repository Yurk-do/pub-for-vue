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
    changeStatusLoginForm(state) {
      state.loginForm = !state.loginForm;
    },
    changUserStatusAuth(state) {
      state.userAuth = !state.userAuth;
    },
    changeStatusExitWindow(state) {
      state.exitWindow = !state.exitWindow;
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
