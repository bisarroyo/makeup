import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from '../reducers/reducer';

const initialState = {
  item: [
    {
      id: 1,
      name: 'camisa',
      price: 23,
      quantity: 1,
    },
    {
      id: 2,
      name: 'camisa',
      price: 23,
      quantity: 1,
    },
  ],
  cart: [],
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(reduxThunk),
);

export default store;
