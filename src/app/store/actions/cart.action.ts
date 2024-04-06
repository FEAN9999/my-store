import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    insertToCart: props<{ product: Product }>(),
    updateQuantity: props<{ id: number; quantity: number }>(),
    deleteCartItem: props<{ id: number }>(),
  },
});
