import { Component } from '@angular/core';
import * as _ from 'underscore';

import { ProductsService } from '../products.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  category: string;
  products: Product[];
  constructor(productsService: ProductsService) {
    this.category = 'All';
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
    this.products.push(product);
  }

}
