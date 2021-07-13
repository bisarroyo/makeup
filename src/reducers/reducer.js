import { ITEM } from '../types';

const initialState = {
  item: [
    {
      id: 1,
      name: 'camisa',
      price: 23,
    },
    {
      id: 1,
      name: 'camisa',
      price: 23,
    },
  ],
  cart: [
    {
      id: 1,
      name: 'camisa',
      price: 23,
    },
    {
      id: 2,
      name: 'camisa',
      price: 23,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: action.payload,
      };
    default: return state;
  }
};

export default reducer;
