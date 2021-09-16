export default {
  state: {
    orderItemsList: [],
  },
  mutations: {
    addSameItem(state, { dublicateItem, increment }) {
      console.log(dublicateItem, increment)
      state.orderItemsList.forEach((item) => {
        if (item.id === dublicateItem.id) {
          if (increment) {
            item.price =
              parseInt(item.price) + parseInt(item.price) / item.quantity + "$";
            item.quantity += 1;
          } else {
            item.price =
              parseInt(item.price) - parseInt(item.price) / item.quantity + "$";
            item.quantity -= 1;
          }
        }
      });
    },

    addItemToOrderList(state, orderItem) {
      return state.orderItemsList.push(orderItem);
    },
    deleteFromOrderItemsList(state, orderItem) {
      let indexForDelete;
      state.orderItemsList.forEach((item, index) => {
        if (item.id === orderItem.id) {
          if (item.quantity > 1) {
            item.price = parseInt(item.price) - parseInt(orderItem.price);
            item.quantity -= 1;
          } else {
            indexForDelete = index;
          }
        }
      });

      if (indexForDelete !== undefined) {
        state.orderItemsList.splice(indexForDelete, 1);
      }
    },
  },
  actions: {
    addToOrderItemsList({ getters, commit }, orderItem) {
      if (
        getters.getOrderItemsList.length === 0 ||
        !getters.getOrderItemsList.find((item) => item.id === orderItem.id)
      ) {
        commit("addItemToOrderList", orderItem);
      } else {
        const increment = true;
        const dublicateItem = orderItem;
        commit("addSameItem", {dublicateItem, increment});
      }
    },

    deleteFromOrderItemsList({ commit }, orderItem) {
      commit("deleteFromOrderItemsList", orderItem);
    },
  },
  getters: {
    getOrderItemsList(state) {
      return state.orderItemsList;
    },
  },
};
