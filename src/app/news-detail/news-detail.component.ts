import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { News } from '../news';
import { ListBuilderService } from '../list-builder.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [ ListBuilderService ]
})
export class NewsDetailComponent implements OnInit {
  @Input() news: News;

  constructor(
    private listBuilderService: ListBuilderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.listBuilderService.getNewsDetail(+params['id']))
      .subscribe(news => this.news = news);
  }

  goBack(): void {
    this.location.back();
  }

}
