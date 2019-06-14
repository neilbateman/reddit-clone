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
  makePost(title: HTMLInputElement, link: HTMLInputElement): boolean{
    this.posts.push(new Post(title.value, link.value, 0));
    return false;
  }
  sortPosts(): Post[] {
  return this.posts.sort((a: Post, b: Post) => b.votes - a.votes);
}
}
