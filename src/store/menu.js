export default {
  state: {
    menuData: [],
    menuDataFilter: [],
  },
  mutations: {
    updateMenuData(state, data) {
      state.menuData = data;
    },
    updateMenuDataByFilter(state, filterItems) {
      state.menuDataFilter.push(...filterItems);
      console.log(filterItems);
      console.log(state.menuDataFilter);
    },
  },

  actions: {
    requestMenuData({ commit }) {
      fetch("http://localhost:3000/menu/")
        .then((response) => response.json())
        .then((data) => commit("updateMenuData", data));
    },
    filterMenuData({ commit }, { allMenuItems, typeFilter, valueFilter }) {
      typeFilter = typeFilter.toLowerCase();
      const filterItems = allMenuItems.filter(
        (item) => item[typeFilter] === valueFilter
      );
      commit("updateMenuDataByFilter", filterItems);
    },
  },
  getters: {
    getDataMenuByCategory: (state) => (categoryMenu) => {
      return state.menuData[categoryMenu];
    },
    getMenuDataFilter: (state) => {
      return state.menuDataFilter;
    },
  },
};
