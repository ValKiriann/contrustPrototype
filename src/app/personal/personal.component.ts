import { Component, OnInit } from '@angular/core';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [ ListBuilderService ]
})
export class PersonalComponent implements OnInit {

  newsPersonal: News[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getNewsPersonal()
      .then(newsPersonal => this.newsPersonal = newsPersonal.slice(0, 10));
  }

}
