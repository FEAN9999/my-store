import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../../models/cart.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cartActions } from '../../store/actions/cart.action';
import { Router } from '@angular/router';
import { Confirmation } from '../../models/confirmation.model';
import { confirmationActions } from '../../store/actions/confirmation.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  carts: Observable<Cart[]>;
  inforForm = {
    name: '',
    address: '',
    creditCard: '',
  };
  errorForm = {
    name: '',
    address: '',
    creditCard: '',
  };

  constructor(private store: Store<{ carts: Cart[] }>, private router: Router) {
    this.carts = store.select('carts');
  }

  ngOnInit() {}

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
    let total = this.countTotal();
    this.store.dispatch(
      confirmationActions.setDataConfirmation({
        confirmation: { ...this.inforForm, total },
      })
    );
    this.router.navigate(['/confirmation']);
  }

  validateForm() {
    this.errorForm = {
      name: '',
      address: '',
      creditCard: '',
    };

    if (this.inforForm.name === '') {
      this.errorForm.name = 'Name is required';
      return false;
    }

    if (this.inforForm.name.length < 3) {
      this.errorForm.name = 'Name must have at least 3 characters';
      return false;
    }

    if (this.inforForm.address === '') {
      this.errorForm.address = 'Address is required';
      return false;
    }

    if (this.inforForm.address.length < 6) {
      this.errorForm.address = 'Address must have at least 6 characters';
      return false;
    }

    if (this.inforForm.creditCard === '') {
      this.errorForm.creditCard = 'Credit card is required';
      return false;
    }

    if (!/^\d{16}$/.test(this.inforForm.creditCard)) {
      this.errorForm.creditCard = 'Credit card must have 16 numbers';
      return false;
    }

    return true;
  }
  countTotal() {
    let total = 0;
    this.carts.subscribe((carts) => {
      carts.forEach((cart) => {
        total += cart.price * cart.quantity;
      });
    });
    return total;
  }

  deleteCartItem(id: number) {
    this.store.dispatch(cartActions.deleteCartItem({ id }));
  }

  onChangeQuantity(event: any, cart: Cart) {
    let value = event.target.value;
    if (value.length > 1) {
      value = value.slice(0, 2);
    }
    this.store.dispatch(
      cartActions.updateQuantity({ id: cart.id, quantity: Number(value) })
    );
  }

  onKeyPressQuantity(event: any) {
    const value = event.target.value;
    if (value.length > 1) {
      event.preventDefault();
    }
  }
}
