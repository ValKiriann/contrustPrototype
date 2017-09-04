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

  news: News[] = [];
  searches: Search[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getNews()
      .then(news => this.news = news.slice(0, 5));
    this.listBuilderService.getSearches()
      .then(searches => this.searches = searches.slice(0, 3));
  }

}
