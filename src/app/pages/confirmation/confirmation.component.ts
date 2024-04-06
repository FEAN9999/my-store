import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Confirmation } from '../../models/confirmation.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent implements OnInit {
  comfirmation: Observable<Confirmation>;
  information: Confirmation = {
    name: '',
    address: '',
    creditCard: '',
    total: 0,
  };
  constructor(
    private store: Store<{ confirmation: Confirmation }>,
    private router: Router
  ) {
    this.comfirmation = store.select('confirmation');
  }

  ngOnInit() {
    this.comfirmation.subscribe((data) => {
      this.information = data;
    });
  }

  onClickBack() {
    this.router.navigate(['/']);
    
  }
}
