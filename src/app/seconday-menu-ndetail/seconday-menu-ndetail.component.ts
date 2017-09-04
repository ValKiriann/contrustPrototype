import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ListBuilderService } from '../list-builder.service';

import { News } from '../news';
import { Source } from '../source';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-seconday-menu-ndetail',
  templateUrl: './seconday-menu-ndetail.component.html',
  styleUrls: ['./seconday-menu-ndetail.component.css']
})
export class SecondayMenuNdetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
