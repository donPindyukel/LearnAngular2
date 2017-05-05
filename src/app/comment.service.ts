import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Comment } from "./comment";

import { Observable } from "rxjs/Observable";

@Injectable()
export class CommentService {

  private url = 'http://localhost:2403/comments';

  constructor(private http: Http) { }

  public getComments(): Observable<Comment[]> {
    let comments = this.http.get(this.url)
      .map(this.extractComments)
      .catch(this.handleError);
    return comments;
  }

  public addComment(comment: Comment): Observable<any> {
    return this.http.post(this.url, comment).catch(this.handleError);
  }

  private extractComments(response: Response) {
    let res = response.json();
    let comments: Comment[] = [];
    for (let i = 0; i < res.length; i++) {
      comments.push(new Comment(res[i].id, res[i].userName, res[i].commentText, res[i].Date));
    }
    return comments;
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
