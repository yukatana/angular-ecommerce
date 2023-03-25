// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { AccountModule } from './account/account.module';

// Components
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

// NgRx reducers
import { ROOT_REDUCERS } from './core/state/app.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ProductsModule,
    CartsModule,
    PurchaseHistoryModule,
    AccountModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
