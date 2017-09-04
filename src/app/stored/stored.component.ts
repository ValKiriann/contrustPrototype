import { Component, OnInit } from '@angular/core';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';
import { Search } from '../search';

@Component({
  selector: 'app-stored',
  templateUrl: './stored.component.html',
  styleUrls: ['./stored.component.css'],
  providers: [ ListBuilderService ]
})
export class StoredComponent implements OnInit {

  newsStored: News[] = [];
  searches: Search[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getNewsStored()
      .then(newsStored => this.newsStored = newsStored.slice(0, 5));
    this.listBuilderService.getSearches()
      .then(searches => this.searches = searches.slice(0, 3));
  }

}
