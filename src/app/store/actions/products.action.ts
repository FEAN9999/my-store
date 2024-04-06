import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    setDataListProduct: props<{ products: Product[] }>(),
    reset: emptyProps(),
  },
});
