import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';
import { CartItem } from '../../../models/cart.state';

export const selectCartState = createFeatureSelector<CartItem[]>(
  fromCart.cartFeatureKey
);
