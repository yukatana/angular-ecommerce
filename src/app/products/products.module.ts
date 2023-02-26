import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormsModule } from '../shared/shared-forms.module';
import { MaterialModule } from '../shared/material.module';

import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductsParentComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
    MaterialModule
  ],
  exports: [
    ProductsParentComponent,
    ProductListComponent,
    ProductFormComponent,
  ]
})
export class ProductsModule { }
