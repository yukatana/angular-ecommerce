import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryService } from '../purchase-history/services/purchase-history.service';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './state/reducers/cart.reducer';

@NgModule({
  declarations: [
    CartComponent
  ],
  providers: [
    PurchaseHistoryService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
  ]
})
export class CartModule { }
