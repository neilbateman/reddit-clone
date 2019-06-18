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
  // 
  // webLink(): string {
  //   try {
  //     const link: string = this.link.split('//')[1];
  //     return link.split('/')[0];
  //   } catch (err) {
  //     return null;
  //   }
  // }
  upVote(): void {
    this.votes +=1;
  }

  downVote(): void {
    this.votes -=1;
  }
}
