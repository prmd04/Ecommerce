const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.find(item => item.id === action.payload.id);

    if (existingItem) {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price * action.payload.quantity
      };
    } else {
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price * action.payload.quantity
      };
    }
  }

  return state;
};
export default CartReducer;