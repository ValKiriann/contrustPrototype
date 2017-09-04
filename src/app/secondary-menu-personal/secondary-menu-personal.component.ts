import { Component, OnInit } from '@angular/core';

import { ListBuilderService } from '../list-builder.service';

import { Tag } from '../tag';

@Component({
  selector: 'app-secondary-menu-personal',
  templateUrl: './secondary-menu-personal.component.html',
  styleUrls: ['./secondary-menu-personal.component.css'],
  providers: [ ListBuilderService ]
})
export class SecondaryMenuPersonalComponent implements OnInit {

  tagsPersonal: Tag[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getTagsPersonal()
      .then(tagsPersonal => this.tagsPersonal = tagsPersonal.slice(0, 5));
  }

}
