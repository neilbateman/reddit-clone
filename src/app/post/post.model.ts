export class Post {
  title: string;
  comment: string;
  link: string;
  votes: number;

  constructor(title: string, comment: string, link: string, votes?: number) {
  this.title = title;
  this.comment = comment;
  this.link = link;
  this.votes = votes;
}
  upVote(): void {
    this.votes +=1;
  }
  
  downVote(): void {
    this.votes -=1;
  }
}
