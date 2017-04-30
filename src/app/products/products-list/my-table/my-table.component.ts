import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../../../products.model';

import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  constructor(public productsService: ProductsService, public router: Router) {
  }

  ngOnInit() {
  }

  onClickDelete(id) {
    this.productsService.removeElement(id);
  }
  showDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
