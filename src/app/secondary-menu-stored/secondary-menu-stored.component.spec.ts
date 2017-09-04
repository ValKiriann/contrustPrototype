import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMenuStoredComponent } from './secondary-menu-stored.component';

describe('SecondaryMenuStoredComponent', () => {
  let component: SecondaryMenuStoredComponent;
  let fixture: ComponentFixture<SecondaryMenuStoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryMenuStoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryMenuStoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
