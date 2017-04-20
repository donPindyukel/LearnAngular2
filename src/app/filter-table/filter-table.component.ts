import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

  onChange(changes: string) {
    this.productsService.categorySort(changes);
  }

}
