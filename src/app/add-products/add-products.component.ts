import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as _ from 'underscore';

import { Product } from '../products.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  name: string;
  price: number;
  category: string;

  @Output()
  addProduct: EventEmitter<Product> = new EventEmitter();

  @Input()
  products: Product[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

  onSubmit() {
    let productMaxId = _.max(this.products, (product) => {
      return product.id;
    });
    let id = productMaxId.id + 1;
    this.addProduct.emit({
      id,
      name: this.name,
      price: this.price,
      category: this.category
    })
  }

}
