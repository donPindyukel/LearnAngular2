import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";

import { ProductsListComponent } from './products-list/products-list.component';
import { MyTableComponent } from './products-list/my-table/my-table.component';
import { FilterTableComponent } from './products-list/filter-table/filter-table.component';
import { AddProductsComponent } from './products-list/add-products/add-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    ProductsListComponent,
    MyTableComponent,
    FilterTableComponent,
    AddProductsComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
