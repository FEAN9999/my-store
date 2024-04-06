import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'detail/:id', component: DetailProductComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];
