import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';
import { Source } from '../source';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [ ListBuilderService ]
})
export class NewsDetailComponent implements OnInit {
  @Input() news: News;

  sources: Source[] = [];
  selectedSource: Source;

  constructor(
    private router: Router,
    private listBuilderService: ListBuilderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.listBuilderService.getSources()
      .then(sources => this.sources = sources.slice(0, 10));

    this.route.params
      .switchMap((params: Params) => this.listBuilderService.getNewsDetail(+params['id']))
      .subscribe(news => this.news = news);
  }

  onSelect(source: Source): void {
    this.selectedSource = source;
  }

  gotoDetail(): void {
    this.router.navigate(['/news-detail-easy-read', this.selectedSource.id]);
  }

  goBack(): void {
    this.location.back();
  }

}
