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
  link = 'website.com';
  comment = 'content';

  constructor() {
    this.posts = [
      new Post('Next time someone calls you “bro” send them this.', 'al;sdfjal;sdjf', 'awesome.com', 5),
      new Post('Another Fab Post', 'al;sdfjal;sdjf', 'cantbeatit.com', 4),
      new Post('Front Page Material', 'al;sdfjal;sdjf', 'reddit.com', 3)
    ];
  }
  makePost(title: HTMLInputElement, comment: HTMLInputElement,link: HTMLInputElement): boolean {
    this.posts.push(new Post(title.value, comment.value, link.value, 0));
    title.value ="";
    link.value ="";
    comment.value ="";
    return false;
  }
  sortPosts(): Post[] {
  return this.posts.sort((a: Post, b: Post) => b.votes - a.votes);
}
}
