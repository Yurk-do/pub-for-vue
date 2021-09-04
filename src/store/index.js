import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginForm: false,
  },
  mutations: {
    activateLoginForm(state) {
      state.loginForm = true;
    },
    disactivateLoginForm(state) {
      state.loginForm = false;
    }
  },
  actions: {},
  modules: {},
});
