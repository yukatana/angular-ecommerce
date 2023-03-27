import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart.state';
import { AppState } from '../../core/state/app.state';
import { Store } from '@ngrx/store';
import { cartSelector } from '../../core/state/cart/cart.selectors';
import { Product } from '../../models/product';
import { addItemToCart, deleteItemFromCart, editItemQuantity, emptyCart } from '../../core/state/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart!: CartItem[]

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(cartSelector).subscribe(
      state => this.cart = state
    )
  }

  getCartObservable() {
    return this.store.select(cartSelector)
  }

  addItemToCart(product: Product, quantity: number) {
    // structuring item as CartItem interface to dispatch action
    const item = { product, quantity }
    // checking if an item is already in the cart
    const isItemInCart = this.cart.findIndex(e => e.product.id === product.id)
    if (isItemInCart !== -1) {
      this.store.dispatch(editItemQuantity({ product, quantity: this.cart[isItemInCart].quantity+1 }))
    } else {
      this.store.dispatch(addItemToCart({ item }))
    }
  }

  editProductQuantity(item: CartItem, change: number) {
    const quantity = item.quantity+change
    if (quantity !== 0) {
      this.store.dispatch(editItemQuantity({ product: item.product, quantity }))
    } else {
      this.store.dispatch(deleteItemFromCart({ product: item.product }))
    }
  }

  deleteItemFromCart(product: Product) {
    this.store.dispatch(deleteItemFromCart({ product }))
  }

  emptyCart() {
    this.store.dispatch(emptyCart())
  }
}
