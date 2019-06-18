import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
//import Post from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: { class: "row" }

})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor() {
    this.post = new Post(
      'First Post',
      'http://reddit.com',
    'asdjf', 8)
   }

   upVote(): boolean{
     this.post.upVote();
     return false;
   }
   downVote(): boolean{
     this.post.downVote();
     return false;
   }
  ngOnInit() {
  }

}
