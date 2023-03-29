import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryService } from '../purchase-history/services/purchase-history.service';



@NgModule({
  declarations: [
    CartComponent
  ],
  providers: [
    PurchaseHistoryService
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CartModule { }
