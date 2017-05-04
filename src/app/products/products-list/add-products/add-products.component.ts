import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ProductsService } from '../../../products.service';
import { Product } from '../../../products.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  model: Product;
  userForm: FormGroup;
  formErrors = {
    "name": "",
    "price": "",
    "category": ""
  };

  validationMessages = {
    "name": {
      "required": "Обязательное поле.",
      "minlength": "Значение должно быть не менее 4х символов.",
    },
    "price": {
      "required": "Обязательное поле."
    },
    "category": {
      "required": "Обязательное поле."
    }
  };

  constructor(public productsService: ProductsService, private fb: FormBuilder) {
    this.model = new Product (/*this.productsService.getProductsMaxId(), '', 0, ''*/);
  }


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      "name": [this.model.name, [
        Validators.required,
        Validators.minLength(4),
      ]],
      "price": [this.model.price, [
        Validators.required,
      ]],
      "category": [this.model.category, [
        Validators.required
      ]]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChange(data));

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.userForm) return;
    let form = this.userForm;

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
    this.productsService.addProduct(this.userForm.value);
    //console.log(this.userForm.value);
  }

}
