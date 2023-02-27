import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Product[]

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(state => {
      this.products$ = state
    })
  }

  openEditProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(EditProductComponent, {data: product})
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
  }

}
