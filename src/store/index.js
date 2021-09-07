import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    loginForm: false,
    userAuth: false,
    exitWindow: false,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
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
  getters: {
    error: (state) => state.error,
  },
  actions: {},
  modules: {
    auth,
  },
});
