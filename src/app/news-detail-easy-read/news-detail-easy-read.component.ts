import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';
import { Source } from '../source';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-news-detail-easy-read',
  templateUrl: './news-detail-easy-read.component.html',
  styleUrls: ['./news-detail-easy-read.component.css'],
  providers: [ ListBuilderService ]
})
export class NewsDetailEasyReadComponent implements OnInit {
  @Input() news: News;

  source: Source[] = [];

  constructor(
    private listBuilderService: ListBuilderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.listBuilderService.getSources() // TODO: News by source
    // this.listBuilderService.getSource(+params['idSource'])
      .then(source => this.source = source.slice(0, 2));

    this.route.params
      .switchMap((params: Params) => this.listBuilderService.getNewsDetail(+params['id'])) // TODO: News by source
      // .switchMap((params: Params) => this.listBuilderService.getNewsDetailBySource(+params['idNews']))
      .subscribe(news => this.news = news);
  }

  goBack(): void {
    this.location.back();
  }

}
