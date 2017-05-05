import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Comment } from "../comment";
import { CommentService } from "../comment.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment: Comment = new Comment();
  errorMessage: string;

  userForm: FormGroup;

  formErrors = {
    "userName": "",
    "commentText": ""
  };

  validationMessages = {
    "userName": {
      "required": "Обязательное поле.",
    },
    "commentText": {
      "required": "Обязательное поле.",
    }
  };

  constructor(private fb: FormBuilder,
              private service: CommentService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      "userName": [this.comment.userName, [
        Validators.required
      ]],
      "commentText": [this.comment.commentText, [
        Validators.required,
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
    this.userForm.value["Date"] = new Date();
    this.service.addComment(this.userForm.value).subscribe(
      (res) => console.log(res),
      error => this.errorMessage = error
    );
  }

}
