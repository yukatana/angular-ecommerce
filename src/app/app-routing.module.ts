import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsParentComponent } from './products/components/products-parent/products-parent.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { PurchaseHistoryComponent } from './purchase-history/components/purchase-history/purchase-history.component';
import { AccountComponent } from './account/components/account/account.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: 'products', component: ProductsParentComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent, canActivate: [AuthenticationGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthenticationGuard] },
  // Lazy loading login and signup functionalities through auth.module
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
