import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsModule } from './products/products.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
  //  FormsModule,
//    HttpModule,
//    AlertModule.forRoot(),
    AppRoutingModule,
    ProductsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
