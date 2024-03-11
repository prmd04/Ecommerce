const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price * action.payload.quantity
      };
    default:
      return state;
  }
};

export default CartReducer;
