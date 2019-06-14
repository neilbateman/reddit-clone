import { Component } from '@angular/core';
import { Post } from './post/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  title = 'reddit-clone';

  constructor() {
    this.posts = [
      new Post('Sweet Post', 'awesome.com', 5)
    ];
  }
}
