import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolmesComponent } from './holmes.component';

describe('HolmesComponent', () => {
  let component: HolmesComponent;
  let fixture: ComponentFixture<HolmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolmesComponent]
    });
    fixture = TestBed.createComponent(HolmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
