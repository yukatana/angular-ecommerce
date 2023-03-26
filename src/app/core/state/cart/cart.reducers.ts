import { CartState } from '../../../models/cart.state';
import { createReducer, on } from '@ngrx/store';
import { addItemToCart, deleteItemFromCart, editProductQuantity, emptyCart } from './cart.actions';

const initialState: CartState = {
  items: []
}

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { item }) => {
    return {
      items: [...state.items, item]
    }
  }),
  on(deleteItemFromCart, (state, { product }) => {
    const updatedCart = state.items.filter(e => e.product !== product)
    return { items: updatedCart }
  }),
  on(editProductQuantity, (state, { product, quantity }) => {
    // Replacing the quantity property of the item in the array by its index
    state.items[state.items.findIndex(e => e.product === product)].quantity = quantity
    return state
  }),
  on(emptyCart, () => {
    return { items: [] }
  })
)
