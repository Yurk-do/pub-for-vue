import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import windows from "./windows";
import info from "./info";
import firebase from "@firebase/app-compat";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    userData: {},
  },

  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    changeUserData(state, userData) {
      state.userData = { ...userData };
    },
  },
  getters: {
    error: (state) => state.error,
  },
  actions: {
    async getUserData({ commit, dispatch, state }) {
      const userId = await dispatch("getUserId");
      console.log(userId);
      let userData = await firebase
        .database()
        .ref(`/users/${userId}/`)
        .once("value");
      userData = userData.val().info;
      commit("changeUserData", userData);
      console.log(state.userData);
    },
  },
  modules: {
    windows,
    auth,
    info,
},
});
