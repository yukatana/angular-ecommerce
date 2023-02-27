import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup

  constructor(
    private productService: ProductService
  ) {
    const URLRegex: string = '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})'
    const controls: any = {
      name: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(),
      thumbnail: new FormControl(null, [Validators.required, Validators.pattern(URLRegex)]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      stock: new FormControl(null, [Validators.required, Validators.min(1)])
    }
    this.productForm = new FormGroup(controls)
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    const product: Product = this.productForm.value
    this.productService.addProduct(product)
  }
}
