import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../../models/cart.state';
import { Product } from '../../../models/product';

export const addItemToCart = createAction(
  '[Products Component] Add product to cart',
  props<{ item: CartItem }>()
)

export const deleteItemFromCart = createAction(
  '[Cart Component] Delete product from cart',
  props<{ product: Product }>()
)

export const editItemQuantity = createAction(
  '[Cart Component] Edit product quantity in cart',
  props<{ product: Product, quantity: number }>()
)

export const emptyCart = createAction(
  '[Cart Component] Empty cart'
)
