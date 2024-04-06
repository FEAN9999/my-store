import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Store } from '@ngrx/store';
import { cartActions } from '../../store/actions/cart.action';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor(private store: Store<{ products: Product[] }>) {
    this.products = new Observable<Product[]>();
  }

  ngOnInit() {}

  addToCart(product: Product) {
    this.store.dispatch(cartActions.insertToCart({ product }));
  }
}
