export default {
  state: {
    orderItemsList: [],
  },
  mutations: {
    addSameItem(state, { dublicateItem, increment }) {
      state.orderItemsList.forEach((item) => {
        if (item.id === dublicateItem.id) {
          if (increment) {
            if (item.quantity === 0) {
              item.price = dublicateItem.price;
            } else {
              item.price =
                parseInt(item.price) +
                parseInt(item.price) / item.quantity +
                "$";
              item.quantity += 1;
            }
          } else if (item.quantity !== 1) {
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
    addToOrderItemsList({ state, commit }, orderItem) {
      if (
        state.orderItemsList.length === 0 ||
        !state.orderItemsList.find((item) => item.id === orderItem.id)
      ) {
        commit("addItemToOrderList", orderItem);
      } else {
        commit("addSameItem", orderItem);
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
