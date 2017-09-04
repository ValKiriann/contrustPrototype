import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMenuSettingsComponent } from './secondary-menu-settings.component';

describe('SecondaryMenuSettingsComponent', () => {
  let component: SecondaryMenuSettingsComponent;
  let fixture: ComponentFixture<SecondaryMenuSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryMenuSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryMenuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
