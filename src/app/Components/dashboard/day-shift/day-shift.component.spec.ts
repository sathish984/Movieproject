import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayShiftComponent } from './day-shift.component';

describe('DayShiftComponent', () => {
  let component: DayShiftComponent;
  let fixture: ComponentFixture<DayShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayShiftComponent]
    });
    fixture = TestBed.createComponent(DayShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
