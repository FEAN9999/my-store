import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private router: Router) {
    this.product = {} as Product;
  }

  ngOnInit() {}

  handleAddToCart(event: any, product: Product) {
    event.stopPropagation();
    this.addToCart.emit(product);
    alert('Add to cart success');
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
