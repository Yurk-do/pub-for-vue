import calculateRange from "@/store/constants/filter/calculateRange.js";
export default {
  state: {
    menuData: [],
    menuDataFilter: [],
    activeFieldsForFilter: [],
  },
  mutations: {
    updateMenuData(state, data) {
      state.menuData = data;
    },
    updateMenuDataByFilter(state, filterItems) {
      state.menuDataFilter.push(...filterItems);
    },
    resetFilterData(state) {
      state.menuDataFilter = [];
      state.activeFieldsForFilter = [];
    },
    updateActiveFieldsForFilter(state, { valueFilter }) {
      if (!state.activeFieldsForFilter.includes(valueFilter)) {
        state.activeFieldsForFilter.push(valueFilter);
      }
    },
  },
  actions: {
    requestMenuData({ commit }) {
      fetch("http://localhost:3000/menu/")
        .then((response) => response.json())
        .then((data) => commit("updateMenuData", data));
    },
    addToFilterMenuData({ commit }, { allMenuItems, typeFilter, valueFilter }) {
      let filterItems;
      if (typeFilter === "country") {
        filterItems = allMenuItems.filter(
          (item) => item[typeFilter] === valueFilter
        );
      } else {
        filterItems = allMenuItems.filter((item) =>
          calculateRange(valueFilter, item[typeFilter])
        );
      }
      commit("updateMenuDataByFilter", filterItems);
      commit("updateActiveFieldsForFilter", { valueFilter });
    },
  },
  getters: {
    getDataMenuByCategory: (state) => (categoryMenu) => {
      return state.menuData[categoryMenu];
    },
    getMenuDataFilter: (state) => {
      return state.menuDataFilter;
    },
    getActiveFieldsForFilter: (state) => {
      return state.activeFieldsForFilter;
    },
  },
};
