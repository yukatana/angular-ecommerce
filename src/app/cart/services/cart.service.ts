import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart.state';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import * as CartActions from '../../cart/state/actions/cart.actions';
import { selectCartState } from '../state/selectors/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart!: CartItem[]

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(selectCartState).subscribe(
      state => this.cart = state
    )
  }

  getCartObservable() {
    return this.store.select(selectCartState)
  }

  addItemToCart(product: Product, quantity: number) {
    // structuring item as CartItem interface to dispatch action
    const item = { product, quantity }
    // checking if an item is already in the cart
    const isItemInCart = this.cart.findIndex(e => e.product._id === product._id)
    if (isItemInCart !== -1) {
      this.store.dispatch(CartActions.editItemQuantity({ product, quantity: this.cart[isItemInCart].quantity+1 }))
    } else {
      this.store.dispatch(CartActions.addItemToCart({ item }))
    }
  }

  editProductQuantity(item: CartItem, change: number) {
    const quantity = item.quantity+change
    if (quantity !== 0) {
      this.store.dispatch(CartActions.editItemQuantity({ product: item.product, quantity }))
    } else {
      this.store.dispatch(CartActions.deleteItemFromCart({ product: item.product }))
    }
  }

  deleteItemFromCart(product: Product) {
    this.store.dispatch(CartActions.deleteItemFromCart({ product }))
  }

  emptyCart() {
    this.store.dispatch(CartActions.emptyCart())
  }
}
