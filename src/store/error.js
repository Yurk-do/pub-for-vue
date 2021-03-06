export default {
  state: {
    errorMessage: false,
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const userId = await dispatch("getUserId");
        const info = (
          await firebase.database().ref(`/users/${userId}/info`).once("value")
        ).val();
        commit("setInfo", info);
      } catch (error) {
        console.log("ERRRRRRRRRRRRRRRROR",error);
      }
    },
  },
  getters: {
    getErrorMessage: (state) => state.errorMessage,
  },
};
