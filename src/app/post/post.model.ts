// import { Post} from '../post';

export class Post {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
  this.title = title;
  this.link = link;
  this.votes = votes || 0;
}
  upVote(): void {
    this.votes +=1;
  }

  downVote(): void {
    this.votes +=1;
  }
}
