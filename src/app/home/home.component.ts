import { Component, OnInit } from '@angular/core';

import { CommentService } from "../comment.service";
import { Comment } from "../comment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments: Comment[];
  errorMessage: string;

  constructor(public service: CommentService) { }

  ngOnInit() {
    this.service.getComments().subscribe(
      comments => this.comments = comments,
      error => this.errorMessage = error
    );
    //console.log(this.comments);
  }

}
