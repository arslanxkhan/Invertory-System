import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
  },
 
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((x) => x.ProductModule),
  },

  {
    path: 'purchases',
    loadChildren: () =>
      import('./purchase/purchase.module').then((x) => x.PurchaseModule),
  },
 

  {
    path: 'sales',
    loadChildren: () =>
      import('./sales/sales.module').then((x) => x.SalesModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}