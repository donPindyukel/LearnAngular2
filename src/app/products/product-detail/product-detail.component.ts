import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Product } from '../../products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((param: Params) => {
      this.product = this.service.getProductById(+param['id']);
    });
  }

  onClickGoBack() {
    this.router.navigate(['/products']);
  }

}
