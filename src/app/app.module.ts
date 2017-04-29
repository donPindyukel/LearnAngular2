import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { MyTableComponent } from './products/my-table/my-table.component';
import { FilterTableComponent } from './products/filter-table/filter-table.component';
import { AddProductsComponent } from './products/add-products/add-products.component';

import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterTableComponent,
    AddProductsComponent,
    HomeComponent,
    AdminComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
