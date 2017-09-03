import { Injectable } from '@angular/core';

import { News } from './news';
import { Source } from './source';

import { NEWS } from './mock-news';
import { SOURCES } from './mock-sources';

@Injectable()
export class ListBuilderService {

  constructor() { }

  getNews(): Promise<News[]> {
    return Promise.resolve(NEWS);
  }

  getSources(): Promise<Source[]> {
    return Promise.resolve(SOURCES);
  }

}
