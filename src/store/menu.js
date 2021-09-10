export default {
  state: {
    menuData: [],
  },
  mutations: {
    updateMenuData(state, data) {
      return (state.menuData = data);
    },
  },
  actions: {
    requestMenuData({ commit }) {
      fetch("http://localhost:3000/menu/")
        .then((response) => response.json())
        .then((data) => commit("updateMenuData", data));
    },
  },
  getters: {
    getDataBeer: (state) => state.menuData.beer,
    getDataWhiskey: (state) => state.menuData.whiskey,
    getDataFood: (state) => state.menuData.food,
  },
};
