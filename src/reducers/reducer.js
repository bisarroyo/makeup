import { ADD_CART, REMOVE_CART } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default: return state;
  }
};

export default reducer;
