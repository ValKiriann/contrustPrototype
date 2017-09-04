import { Component, OnInit } from '@angular/core';

import { ListBuilderService } from '../list-builder.service';

import { Tag } from '../tag';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css'],
  providers: [ ListBuilderService ]
})
export class SecondaryMenuComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private listBuilderService: ListBuilderService) { }

  ngOnInit(): void {
    this.listBuilderService.getTags()
      .then(tags => this.tags = tags.slice(0, 5));
  }

}
