import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLawnComponent } from './edit-lawn.component';

describe('EditLawnComponent', () => {
  let component: EditLawnComponent;
  let fixture: ComponentFixture<EditLawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
