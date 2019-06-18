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
  comment = 'content';
  link = 'website.com';

  constructor() {
    this.posts = [
      new Post('Next time someone calls you “bro” send them this.', 'Another good story about how a man life gets turned upside down after helping a runaway loli on the street. While we can never be sure of its truth, its a hell of a lot better than Twilight or whatever shitty novel is popular these days. ', 'awesome.com', 5),
      new Post('Another Fab Post', 'Just an anon spending some quality time with his niece. Sadly, moot was so spooked by it that he banned the writer. This story ended up being the last of the great copypastas. ', 'cantbeatit.com', 4),
      new Post('Front Page Material', 'Soon to be a major motion picture!', 'reddit.com', 3)
    ];
  }
  makePost(title: HTMLInputElement, comment: HTMLInputElement, link: HTMLInputElement): boolean {
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
