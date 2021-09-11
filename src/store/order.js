export default {
  state: {
    orderItemsList: [],
    totalPrice: 0,
    productQuantity: 0,
  },
  mutations: {
    changeItemQuantity(state, dublicateItem) {
      state.orderItemsList.forEach((item) => {
        if (item.id === dublicateItem.id) {
          item.quantity += 1;
          item.price =
            parseInt(item.price) + parseInt(dublicateItem.price) + "$";
        }
      });
      console.log(state.orderItemsList);
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
    addToOrderItemsList({ state, commit }, orderItem) {
      console.log(orderItem);
      if (
        state.orderItemsList.length === 0 ||
        !state.orderItemsList.find((item) => item.id === orderItem.id)
      ) {
        commit("addItemToOrderList", orderItem);
      } else {
        commit("changeItemQuantity", orderItem);
      }
    },

    deleteFromOrderItemsList({ commit }, orderItem) {
      commit("deleteFromOrderItemsList", orderItem);
    },
  },
  getters: {
    orderItemsListShortDescription(state) {
      return state.orderItemsList;
    },
  },
};
