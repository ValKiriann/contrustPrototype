import { Component, OnInit } from '@angular/core';

import { ListBuilderService } from '../list-builder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    ListBuilderService
  ]
})
export class HomeComponent implements OnInit {

  news: New[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getNews()
      .then(news => this.news = news.slice(0, 10));
  }

}
