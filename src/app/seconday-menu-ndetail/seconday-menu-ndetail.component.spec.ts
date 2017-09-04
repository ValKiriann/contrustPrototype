import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondayMenuNdetailComponent } from './seconday-menu-ndetail.component';

describe('SecondayMenuNdetailComponent', () => {
  let component: SecondayMenuNdetailComponent;
  let fixture: ComponentFixture<SecondayMenuNdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondayMenuNdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondayMenuNdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
