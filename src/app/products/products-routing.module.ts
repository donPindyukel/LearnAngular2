import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsListComponent,
        children: [
          {
            path: ':id',
            component: ProductDetailComponent
          },
          {
            path: '',
            component: ProductDetailComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
