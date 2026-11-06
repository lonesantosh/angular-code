import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  imports: [CommonModule],
  selector: 'app-comment-list',
  styleUrl: './comment-list.css',
  templateUrl: './comment-list.html',
})
export class CommentList {

  commentService = inject(CommentService);
  comments$ : Observable<Comment[]> | undefined;

  ngOnInit(){
    this.comments$ = this.commentService.getAllComments();
  }


}
