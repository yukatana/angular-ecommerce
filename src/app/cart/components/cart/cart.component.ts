import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart.state';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: CartItem[]

  constructor(
    private cartService: CartService
  ) {
    this.cartService.getCartObservable().subscribe(
      cart => this.cart = cart
    )
  }

  ngOnInit(): void {
  }

  editProductQuantity(item: CartItem, change: number) {
    // Reusable function allows us to fully replace quantity instead of adding/subtracting
    this.cartService.editProductQuantity(item, change)
  }

  deleteItemFromCart(product: Product) {
    this.cartService.deleteItemFromCart(product)
  }

  emptyCart() {
    this.cartService.emptyCart()
  }
}
