import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  name: string;
  price: number;
  category: string;

  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.productsService.addProduct({
      name: this.name,
      price: this.price,
      category: this.category
    });
  }

}
