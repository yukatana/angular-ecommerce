// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';
import { ProductsModule } from './products/products.module';

// Components
import { AppComponent } from './app.component';
import { CartsComponent } from './carts/components/carts/carts.component';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ProductsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
