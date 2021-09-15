export default {
  state: () => ({
    loginForm: false,
    confirmWindow: false,
    burgerMenu: false,
  }),
  mutations: {
    changeStatusLoginFormWindow(state) {
      state.loginForm = !state.loginForm;
    },
    changeStatusConfirmWindow(state) {
      state.confirmWindow = !state.confirmWindow;
    },
    changeStatusBurgerMenu(state) {
      state.burgerMenu = !state.burgerMenu;
      
    }
  },
  getters: {
    getStatusLoginForm: (state) => state.loginForm,
    getStatusConfirmWindow: (state) => state.confirmWindow,
    getStatusBurgerMenu: (state) => state.burgerMenu,
  },
};
