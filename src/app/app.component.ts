import { Component, Input } from '@angular/core';
import * as _ from 'underscore';

import { ProductsService } from './products.service';
import { Product } from './products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category: string = 'All';
  products: Product[];
  constructor(productsService: ProductsService) {
    this.products = productsService.products;
  }
  removedEvent(id) {
    this.products = _.reject(this.products, (item)=>{
      return (item.id === id);
    });
  }
  changeVal(e) {
    this.category = e;
  }
  onAddProduct(product) {
    //console.log(product);
    this.products.push(product);
  }
}
