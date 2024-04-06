import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { detailActions } from '../actions/detail.action';

export const initialState: Product = {} as Product;

export const detailReducer = createReducer(
  initialState,
  on(detailActions.setDataProductDetail, (state, { product }) => {
    return { ...product };
  })
);
