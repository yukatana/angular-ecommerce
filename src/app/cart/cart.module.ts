import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryService } from '../purchase-history/services/purchase-history.service';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './state/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './state/effects/cart.effects';



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
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule { }
