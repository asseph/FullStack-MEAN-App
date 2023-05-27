import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLawnComponent } from './view-lawn.component';

describe('ViewLawnComponent', () => {
  let component: ViewLawnComponent;
  let fixture: ComponentFixture<ViewLawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
