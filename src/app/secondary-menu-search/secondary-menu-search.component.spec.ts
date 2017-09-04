import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMenuSearchComponent } from './secondary-menu-search.component';

describe('SecondaryMenuSearchComponent', () => {
  let component: SecondaryMenuSearchComponent;
  let fixture: ComponentFixture<SecondaryMenuSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryMenuSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryMenuSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
