import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: any;

  constructor(private _commentService : CommentService) { }

  ngOnInit() {
    this._commentService.getComments().subscribe((data)=>{
      this.comments = data;
    })
  }

}
