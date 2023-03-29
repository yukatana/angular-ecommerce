import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart.state';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../models/product';
import { PurchaseHistoryService } from '../../../purchase-history/services/purchase-history.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: CartItem[]

  constructor(
    private cartService: CartService,
    private purchaseHistoryService: PurchaseHistoryService,
  ) {
    this.cartService.getCartObservable().subscribe(
      cart => this.cart = cart
    )
  }

  ngOnInit(): void {
  }

  editProductQuantity(item: CartItem, change: number) {
    // Reusable function allows full quantity replacement instead of adding/subtracting
    this.cartService.editProductQuantity(item, change)
  }

  deleteItemFromCart(product: Product) {
    this.cartService.deleteItemFromCart(product)
  }

  emptyCart() {
    this.cartService.emptyCart()
  }

  purchaseCart() {
    this.purchaseHistoryService.purchaseCart()
  }
}
