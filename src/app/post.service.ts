import { Injectable } from '@angular/core';
import { POSTS } from './mock-db';
import { Post } from './post/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }
}
