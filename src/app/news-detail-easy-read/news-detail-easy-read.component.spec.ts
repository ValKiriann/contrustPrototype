import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailEasyReadComponent } from './news-detail-easy-read.component';

describe('NewsDetailEasyReadComponent', () => {
  let component: NewsDetailEasyReadComponent;
  let fixture: ComponentFixture<NewsDetailEasyReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailEasyReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailEasyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
