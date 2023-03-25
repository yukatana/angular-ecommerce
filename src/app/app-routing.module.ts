import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsParentComponent } from './products/components/products-parent/products-parent.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { PurchaseHistoryComponent } from './purchase-history/components/purchase-history/purchase-history.component';
import { AccountComponent } from './account/components/account/account.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: 'products', component: ProductsParentComponent },
  { path: 'carts', component: CartsComponent, canLoad: [AuthenticationGuard] },
  { path: 'purchase-history', component: PurchaseHistoryComponent, canLoad: [AuthenticationGuard] },
  { path: 'account', component: AccountComponent, canLoad: [AuthenticationGuard] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
