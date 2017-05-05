import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddCommentComponent } from "./add-comment/add-comment.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: "home", component: HomeComponent },
  { path: "add-comment", component: AddCommentComponent }
];
