import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

import { CommentService } from "./comment.service";
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
