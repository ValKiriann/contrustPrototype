import { Injectable } from '@angular/core';

import { Tag } from './tag';
import { News } from './news';
import { Source } from './source';
import { Search } from './search';

import { TAGS } from './mock-tags';
import { NEWS } from './mock-news';
import { SOURCES } from './mock-sources';
import { SEARCHES } from './mock-searches';

@Injectable()
export class ListBuilderService {

  constructor() { }

  getTags(): Promise<Tag[]> {
    return Promise.resolve(TAGS);
  }

  getNews(): Promise<News[]> {
    return Promise.resolve(NEWS);
  }

  getSources(): Promise<Source[]> {
    return Promise.resolve(SOURCES);
  }

  getSearches(): Promise<Search[]> {
    return Promise.resolve(SEARCHES);
  }

}
