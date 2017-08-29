import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredComponent } from './stored.component';

describe('StoredComponent', () => {
  let component: StoredComponent;
  let fixture: ComponentFixture<StoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
