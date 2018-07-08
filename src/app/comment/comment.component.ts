import { CommentService } from './../comment.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  // All the child comments
  commentReplies: string[] = [];
  @Input()
  childOrder: number;
  commentNumber: number;
  animate = false;
  // Event to notify all parents on button hover
  @Output()
  childEvent = new EventEmitter<boolean>();
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentNumber = this.commentService.getCommentNumber();
  }

  onReply() {
    this.commentReplies.push('a new comment');
  }

  onHover() {
    this.childEvent.emit(true);
  }

  onMouseLeave() {
    this.childEvent.emit(false);
  }

  /**
   * Receive child button hover event from children comments and pass on to its parents
   *
   * @param {*} event
   * @memberof CommentComponent
   */
  onReceiveChildEvent(event) {
    this.animate = event;
    this.childEvent.emit(event);
  }
}
