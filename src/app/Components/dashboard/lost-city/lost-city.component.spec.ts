import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostCityComponent } from './lost-city.component';

describe('LostCityComponent', () => {
  let component: LostCityComponent;
  let fixture: ComponentFixture<LostCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostCityComponent]
    });
    fixture = TestBed.createComponent(LostCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
