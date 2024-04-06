import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { detailActions } from '../../store/actions/detail.action';
import { Observable } from 'rxjs';
import { cartActions } from '../../store/actions/cart.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent implements OnInit {
  product: Observable<Product>;
  infoProduct: Product = {} as Product;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detailService: DetailService,
    private store: Store<{ detail: Product }>
  ) {
    this.product = store.select('detail');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['/']);
    }
    this.isLoading = true;
    this.detailService.getProductDetail(id).subscribe((data) => {
      this.infoProduct = data as Product;
      this.store.dispatch(
        detailActions.setDataProductDetail({ product: data as Product })
      );
      this.isLoading = false;
    });
  }

  addToCart(product: Product) {
    this.store.dispatch(cartActions.insertToCart({ product }));
    alert('Add to cart success');
  }
}
