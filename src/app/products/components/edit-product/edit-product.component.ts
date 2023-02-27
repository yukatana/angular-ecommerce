import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {
    const URLRegex: string = '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})'
    const controls: any = {
      name: new FormControl(product.name, [Validators.required]),
      category: new FormControl(product.category, [Validators.required]),
      description: new FormControl(product.description),
      thumbnail: new FormControl(product.thumbnail, [Validators.required, Validators.pattern(URLRegex)]),
      price: new FormControl(product.price, [Validators.required, Validators.min(1)]),
      stock: new FormControl(product.stock, [Validators.required, Validators.min(1)])
    }
    this.editProductForm = new FormGroup(controls)
  }

  ngOnInit(): void {
  }

  editProduct(): void {
    const product = {
      id: this.product.id,
      ...this.editProductForm.value
    }
    this.productService.editProduct(product)
  }

}
