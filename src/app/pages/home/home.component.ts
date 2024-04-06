import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { productActions } from '../../store/actions/products.action';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(
    private store: Store<{ products: Product[] }>,
    private productService: ProductService
  ) {
    this.products = store.select('products');
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.store.dispatch(
        productActions.setDataListProduct({ products: products as Product[] })
      );
    });
  }
}
