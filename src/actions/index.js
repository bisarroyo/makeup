import { ADD_CART, REMOVE_CART } from '../types';

export const addCart = payload => ({
  type: ADD_CART,
  payload,
});

export const removeCart = payload => ({
  type: REMOVE_CART,
  payload,
});
