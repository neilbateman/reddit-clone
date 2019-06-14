import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor() {
    this.post = new Post(
      'First Post',
      'http://reddit.com',
    8)
   }

  ngOnInit() {
  }

}
