import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[]

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getProductsAsObservable().subscribe(
      products => this.products = products
    )
  }

  openEditProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {data: product})
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
  }

  addItemToCart(product: Product, quantity: number) {
    this.cartService.addItemToCart(product, quantity)
  }
}
