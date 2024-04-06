import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const detailActions = createActionGroup({
  source: 'Detail',
  events: {
    setDataProductDetail: props<{ product: Product }>(),
  },
});
