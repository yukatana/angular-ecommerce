import { CartItem } from '../../../models/cart.state';
import { createReducer, on } from '@ngrx/store';
import { addItemToCart, deleteItemFromCart, editItemQuantity, emptyCart } from './cart.actions';

const initialState: CartItem[] = []

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { item }) => {
    return [...state, item]
  }),
  on(deleteItemFromCart, (state, { product }) => {
    return state.filter(e => e.product.id !== product.id)
  }),
  on(editItemQuantity, (state, { product, quantity }) => {
    // deep-copying previous state in order to maintain immutability
    const copy = structuredClone(state)
    // Replacing the quantity property of the item in the array by its index
    copy[copy.findIndex(e => e.product.id === product.id)].quantity = quantity
    return copy
  }),
  on(emptyCart, () => {
    return []
  })
)
