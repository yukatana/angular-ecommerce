import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsParentComponent } from './products/components/products-parent/products-parent.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { PurchaseHistoryComponent } from './purchase-history/components/purchase-history/purchase-history.component';
import { AccountComponent } from './account/components/account/account.component';

const routes: Routes = [
  {path: 'products', component: ProductsParentComponent},
  {path: 'carts', component: CartsComponent},
  {path: 'purchase-history', component: PurchaseHistoryComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
