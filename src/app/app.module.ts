// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { AccountModule } from './account/account.module';
import { SignupModule } from './auth/signup/signup.module';
import { LoginModule } from './auth/login/login.module';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';

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
    CartModule,
    PurchaseHistoryModule,
    AccountModule,
    LoginModule,
    SignupModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
