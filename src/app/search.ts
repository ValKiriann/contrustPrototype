export class Search {
  id: number;
  keywords: string[];
  timestamp: number;
  location: string;
  datePublished: Date;
  topics: string[];

  constructor(id: number, keywords: string[], location: string, datePublished: Date, topics: string[]) {
    this.id = id;
    this.keywords = keywords;
    this.timestamp = Date.now();
    this.location = location;
    this.datePublished = datePublished;
    this.topics = topics;
  }
}
