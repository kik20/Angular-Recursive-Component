import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentNumber = 0;
  constructor() { }

  getCommentNumber() {
    return ++this.commentNumber;
  }
}
