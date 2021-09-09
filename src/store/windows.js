export default {
  state: () => ({
    loginForm: false,
    confirmWindow: false,
  }),
  mutations: {
    changeStatusLoginFormWindow(state) {
      state.loginForm = !state.loginForm;
    },
    changeStatusConfirmWindow(state) {
      state.confirmWindow = !state.confirmWindow;
    },
  },
  getters: {
    getStatusLoginForm: (state) => state.loginForm,
    getStatusConfirmWindow: (state) => state.confirmWindow,
  },
};
