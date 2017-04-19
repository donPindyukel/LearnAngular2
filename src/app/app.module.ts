import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { AddProductsComponent } from './add-products/add-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterTableComponent,
    AddProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
