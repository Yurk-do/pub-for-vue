import firebase from "@firebase/app-compat";

export default {
  state: {
    userAuth: false,
  },
  mutations: {
    changUserStatusAuth(state) {
      state.userAuth = !state.userAuth;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await commit("changUserStatusAuth");
        await commit("changeStatusLoginFormWindow");
      } catch (error) {
        commit("setError", error);
      }
    },

    async register(
      { commit, dispatch },
      { email, password, firstName, lastName, street, house, flat, phone }
    ) {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            email,
            password,
            firstName,
            lastName,
            street,
            house,
            flat,
            phone
          );

        const userId = await dispatch("getUserId");

        await firebase.database().ref(`/users/${userId}/info`).set({
          email,
          password,
          firstName,
          lastName,
          street,
          house,
          flat,
          phone,
        });
      } catch (error) {
        console.log(error);
        commit("setError", error);
      }
    },

    async getUserId() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },

    async logout({ commit }) {
      await firebase.auth().signOut();
      await commit("changUserStatusAuth");
      await commit("changeStatusConfirmWindow");

      commit("clearInfo");
    },

    async checkStatusUserAuth({ commit, dispatch, state }) {
      const userId = await dispatch("getUserId");
      if (userId && !state.userAuth) {
        commit("changUserStatusAuth", userId);
      }
    },
  },

  getters: {
    getStatusUserAuth: (state) => state.userAuth,
  },
};
