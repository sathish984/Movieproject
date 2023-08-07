import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAdamdetailsComponent } from './black-adamdetails.component';

describe('BlackAdamdetailsComponent', () => {
  let component: BlackAdamdetailsComponent;
  let fixture: ComponentFixture<BlackAdamdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackAdamdetailsComponent]
    });
    fixture = TestBed.createComponent(BlackAdamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
