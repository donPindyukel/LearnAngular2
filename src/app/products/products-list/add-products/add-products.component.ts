import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ProductsService } from '../../../products.service'
import { Product } from '../../../products.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit, AfterViewInit {

  model: Product;
  formErrors = {
    name: "",
    price: "",
    category: ""
  };

  validationMessages = {
    name: {
      required: "Обязательное поле.",
      minlength: "Значение должно быть не менее 4х символов.",
    },
    price: {
      required: "Обязательное поле."
    },
    category: {
      required: "Обязательное поле."
    }
  };

  @ViewChild('userForm') userForm: NgForm;

  constructor(public productsService: ProductsService) {
    this.model = new Product (this.productsService.getProductsMaxId(), '', 0, '');
  }

  ngAfterViewInit() {
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  ngOnInit() {
  }

  onValueChanged(data?: any) {
    if (!this.userForm) return;
    let form = this.userForm.form;

    for (let field in this.formErrors) {
      this.formErrors[field] = "";
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }

  onSubmit() {
    this.productsService.addProduct({
      name: this.model.name,
      price: this.model.price,
      category: this.model.category
    });
  }

}
