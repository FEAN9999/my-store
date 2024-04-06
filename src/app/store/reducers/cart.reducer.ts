import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../models/cart.model';
import { cartActions } from '../actions/cart.action';

export const initialState: Cart[] = [];

export const cartReducer = createReducer(
  initialState,
  on(cartActions.insertToCart, (state, { product }) => {
    let foundIndex = state.findIndex((item) => item.id === product.id);
    if (foundIndex > -1) {
      let cloneData = JSON.parse(JSON.stringify(state));
      cloneData[foundIndex].quantity++;
      return [...cloneData];
    } else {
      return [...state, { ...product, quantity: 1 }];
    }
  }),
  on(cartActions.updateQuantity, (state, { id, quantity }) => {
    let foundIndex = state.findIndex((item) => item.id === id);
    if (foundIndex > -1) {
      let cloneData = JSON.parse(JSON.stringify(state));
      cloneData[foundIndex].quantity = quantity;
      return [...cloneData];
    } else {
      return state;
    }
  }),
  on(cartActions.deleteCartItem, (state, { id }) => {
    let foundIndex = state.findIndex((item) => item.id === id);
    if (foundIndex > -1) {
      let cloneData = JSON.parse(JSON.stringify(state));
      cloneData.splice(foundIndex, 1);
      return [...cloneData];
    } else {
      return state;
    }
  })
);
