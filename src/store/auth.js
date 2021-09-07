import firebase from "@firebase/app-compat";

export default {
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await commit("changUserStatusAuth");
        await commit("changeStatusLoginForm");
      } catch (error) {
        commit("setError", error);
      }
    },
    async register(
      { dispatch, commit },
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
        commit("setError", error);
      }
    },
    getUserId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      await commit("changUserStatusAuth");
      await commit("changeStatusExitWindow");
    },
  },
};
