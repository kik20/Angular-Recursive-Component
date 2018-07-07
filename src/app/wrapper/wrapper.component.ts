import { CommentService } from './../comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [CommentService]
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
