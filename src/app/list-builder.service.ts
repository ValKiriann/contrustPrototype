import { Injectable } from '@angular/core';

import { Tag } from './tag';
import { News } from './news';
import { Source } from './source';
import { Search } from './search';

import { TAGS } from './mock-tags';
import { TAGSPERSONAL } from './mock-tags-personal';
import { NEWS } from './mock-news';
import { NEWSPERSONAL } from './mock-news-personal';
import { NEWSSTORED } from './mock-news-stored';
import { SOURCES } from './mock-sources';
import { SEARCHES } from './mock-searches';

@Injectable()
export class ListBuilderService {

  constructor() { }

  getTags(): Promise<Tag[]> {
    return Promise.resolve(TAGS);
  }

  getTagsPersonal(): Promise<Tag[]> {
    return Promise.resolve(TAGSPERSONAL);
  }

  getNews(): Promise<News[]> {
    return Promise.resolve(NEWS);
  }

  getNewsPersonal(): Promise<News[]> {
    return Promise.resolve(NEWSPERSONAL);
  }

  getNewsStored(): Promise<News[]> {
    return Promise.resolve(NEWSSTORED);
  }

  getNewsDetail(id: number): Promise<News> {
    return this.getNews()
      .then(news => news.find(news => news.id === id));
  }

  getSources(): Promise<Source[]> {
    return Promise.resolve(SOURCES);
  }

  getSearches(): Promise<Search[]> {
    return Promise.resolve(SEARCHES);
  }

}
