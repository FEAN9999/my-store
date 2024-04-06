import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { productReducer } from './store/reducers/products.reducer';
import { cartReducer } from './store/reducers/cart.reducer';
import { confirmationReducer } from './store/reducers/confirmation.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore({
      products: productReducer,
      carts: cartReducer,
      confirmation: confirmationReducer,
    }),
  ],
};
