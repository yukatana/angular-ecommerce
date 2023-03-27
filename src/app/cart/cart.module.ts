import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CartModule { }
