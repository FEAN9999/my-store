import { createActionGroup, props } from '@ngrx/store';
import { Confirmation } from '../../models/confirmation.model';

export const confirmationActions = createActionGroup({
  source: 'Confirmation',
  events: {
    setDataConfirmation: props<{ confirmation: Confirmation }>(),
  },
});
