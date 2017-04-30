import { Injectable } from "@angular/core";
import * as _ from 'underscore';

import { Product } from './products.model';


@Injectable()
export class ProductsService {
  products: Product[];
  safePoducts: Product[];

  constructor() {
    this.products = [
      { id: 1, name : 'product 1', price : 100, category: 'Category 1' },
      { id: 2, name : 'product 2', price : 200, category: 'Category 3' },
      { id: 3, name : 'product 3', price : 300, category: 'Category 1' },
      { id: 4, name : 'product 4', price : 400, category: 'Category 2' },
      { id: 5, name : 'product 5', price : 500, category: 'Category 2' },
      { id: 6, name : 'product 6', price : 600, category: 'Category 2' },
      { id: 7, name : 'product 7', price : 700, category: 'Category 3' },
      { id: 8, name : 'product 8', price : 800, category: 'Category 1' },
      { id: 9, name : 'product 9', price : 900, category: 'Category 3' },
      { id: 10, name : 'product 10', price : 1000, category: 'Category 1' }
    ];
    this.safePoducts = [].concat(this.products);
  }

  removeElement(id) {
    this.safePoducts = _.reject(this.safePoducts, (item)=>{
      return (item.id === id);
    });
    this.products = _.reject(this.products, (item)=>{
      return (item.id === id);
    });
  }

  categoryList(): string[] {
    let allCategories = this.safePoducts.map((item) => {
      return item.category;
    });
    allCategories.unshift('All');
    return _.uniq(allCategories);
  }

  categorySort(category: string) {
    this.products = [];
    if (category === 'All') {
      this.products = [].concat(this.safePoducts);
    } else {
      this.products = this.safePoducts.filter((item) => {
        return (item.category === category);
      });
    }
  }

  addProduct(product: any) {
    let productMaxId = _.max(this.safePoducts, (product) => {
      return product.id;
    });
    let id = productMaxId.id + 1;
    this.safePoducts.push({
      id,
      name: product.name,
      price: product.price,
      category: product.category
    });
  }

  getProductById(id: number) {
    return this.safePoducts.find((n)=>{
      return (n.id === id);
    });
  }
}
