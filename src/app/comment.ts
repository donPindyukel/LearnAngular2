export class Comment {
  public id: string;
  public userName: string;
  public commentText: string;
  public Date: string;

  constructor(id?, userName?, commentText?, Date?) {
  this.id = id;
  this.userName = userName;
  this.commentText = commentText;
  this.Date = Date;
  }
}
