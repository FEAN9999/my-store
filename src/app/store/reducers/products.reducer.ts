import { createReducer, on } from '@ngrx/store';
import { productActions } from '../actions/products.action';
import { Product } from '../../models/product.model';

export const initialState: Product[] = [];

export const productReducer = createReducer(
  initialState,
  on(productActions.setDataListProduct, (state, { products }) => {
    return [...products];
  }),
  on(productActions.reset, (state) => {
    return initialState;
  })
);
