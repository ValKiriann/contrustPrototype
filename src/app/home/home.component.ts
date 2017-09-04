import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ListBuilderService ]
})
export class HomeComponent implements OnInit {
  news: News[];
  selectedNews: News;

  constructor(
    private router: Router,
    private listBuilderService: ListBuilderService
  ) { }

  ngOnInit(): void {
    this.listBuilderService.getNews()
      .then(news => this.news = news.slice(0, 10));
  }

  onSelect(news: News): void {
    this.selectedNews = news;
  }

  gotoDetail(): void {
    this.router.navigate(['/news-detail', this.selectedNews.id]);
  }

}
