import { CommentService } from './../comment.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  commentReplies: string[] = [];
  @Input()
  childOrder: number;
  commentNumber: number;
  animate = false;
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

  onReceiveChildEvent(event) {
    console.log(this.commentNumber);
    this.animate = event;
    this.childEvent.emit(event);
  }
}
