import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLawnComponent } from './add-lawn.component';

describe('AddLawnComponent', () => {
  let component: AddLawnComponent;
  let fixture: ComponentFixture<AddLawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
