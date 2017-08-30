import { Injectable } from '@angular/core';

import { New } from './new';
import { Source } from './source';

import { NEWS } from './mock-news';
import { SOURCES } from './mock-sources';

@Injectable()
export class ListBuilderService {

  constructor() { }

  getNews(): Promise<New[]> {
    return Promise.resolve(NEWS);
  }

  getSources(): Source[] {
    return SOURCES;
  }

}
