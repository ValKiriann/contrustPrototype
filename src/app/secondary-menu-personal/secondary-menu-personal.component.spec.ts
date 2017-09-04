import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMenuPersonalComponent } from './secondary-menu-personal.component';

describe('SecondaryMenuPersonalComponent', () => {
  let component: SecondaryMenuPersonalComponent;
  let fixture: ComponentFixture<SecondaryMenuPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryMenuPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryMenuPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
