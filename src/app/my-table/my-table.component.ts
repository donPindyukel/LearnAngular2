import { Component,
          Input,
          OnInit,
          OnChanges,
          SimpleChanges } from '@angular/core';

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {

  constructor(public productsService: ProductsService) {
  }

  ngOnInit() {
    console.log(this.productsService.categoryList());
  }

  onClickDelete(id) {
    this.productsService.removeElement(id);
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
