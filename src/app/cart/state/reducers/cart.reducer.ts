import { createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { CartItem } from '../../../models/cart.state';

export const cartFeatureKey = 'cart';

export const initialState: CartItem[] = [];

export const reducer = createReducer(
  initialState,
  on(CartActions.addItemToCart, (state, { item }) => {
    return [...state, item]
  }),
  on(CartActions.deleteItemFromCart, (state, { product }) => {
    return state.filter(e => e.product._id !== product._id)
  }),
  on(CartActions.editItemQuantity, (state, { product, quantity }) => {
    // deep-copying previous state in order to maintain immutability
    const copy = structuredClone(state)
    // Replacing the quantity property of the item in the array by its index
    copy[copy.findIndex(e => e.product._id === product._id)].quantity = quantity
    return copy
  }),
  on(CartActions.emptyCart, () => {
    return []
  })
);
