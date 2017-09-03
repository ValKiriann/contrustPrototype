import { RatingUserForSource } from './ratingUserForSource';

enum NewsRatingStatus {isTrue, isFake, notVerified};

export class News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  ratingStatus: NewsRatingStatus = NewsRatingStatus.notVerified;
  ratingsUsers: RatingUserForSource[];

  constructor(id: number, title: string, excerpt: string, content: string) {
    this.id = id;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.ratingStatus = NewsRatingStatus.notVerified;
  }

  getTruthSources(): number {
    return;
  }

  getTruthUsers(): number {
    return;
  }

  getTruthFinalRatio(): number {
    return;
  }

  addRatingUser(idSource: number, idUser: number, rate: number): void {
    this.ratingsUsers.push(new RatingUserForSource(idSource, idUser, rate));
  }
}
