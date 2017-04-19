import { Component,
          Input,
          OnInit,
          EventEmitter,
          Output,
          OnChanges,
          SimpleChanges } from '@angular/core';
import * as _ from 'underscore';

import { Product } from '../products.model';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  productsView: Product[] = [];

  @Input()
  rows: number;

  @Output()
  removeId: EventEmitter<number> = new EventEmitter();

  @Input()
  filter: string;

  @Input()
  products: Product[];

  @Input()
  productsLength: number;

  constructor() {
  }

  ngOnInit() {
    this.productsView= [].concat(this.products);
  }
  onClickDelete(id) {
    console.log(id);
    this.productsView = _.reject(this.productsView, (item)=>{
      return (item.id === id);
    });
    this.removeId.emit(id);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.products) return;
    if (changes.productsLength) {
      this.productsView = [];
      this.productsView = [].concat(this.products);
     return;
    }
    if (changes.filter.currentValue === 'All') {
      this.productsView = [];
      this.productsView = [].concat(this.products);
      return;
    } else {
      this.productsView = _.filter(this.products, (item) => {
        return (changes.filter.currentValue === item.category);
      });
    }
  }
}
