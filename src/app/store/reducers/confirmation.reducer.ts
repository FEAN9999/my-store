import { createReducer, on } from '@ngrx/store';
import { Confirmation } from '../../models/confirmation.model';
import { confirmationActions } from '../actions/confirmation.action';

export const initialState: Confirmation = {
  name: '',
  address: '',
  creditCard: '',
  total: 0,
} as Confirmation;

export const confirmationReducer = createReducer(
  initialState,
  on(confirmationActions.setDataConfirmation, (state, { confirmation }) => {
    return { ...confirmation };
  })
);
