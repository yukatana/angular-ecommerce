import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsParentComponent } from './products/components/products-parent/products-parent.component';

const routes: Routes = [
  {path: 'products', component: ProductsParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
