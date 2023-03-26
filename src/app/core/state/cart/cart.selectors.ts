import { AppState } from '../app.state';
import { CartState } from '../../../models/cart.state';
import { createSelector } from '@ngrx/store';

export const cartSelector = (state: AppState): CartState => {
  return state.cart
}

export const cartItemsSelector = createSelector(
  cartSelector,
  (state: CartState) => {
    return state.items
  }
)
