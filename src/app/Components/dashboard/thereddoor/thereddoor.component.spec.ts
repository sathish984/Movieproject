import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThereddoorComponent } from './thereddoor.component';

describe('ThereddoorComponent', () => {
  let component: ThereddoorComponent;
  let fixture: ComponentFixture<ThereddoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThereddoorComponent]
    });
    fixture = TestBed.createComponent(ThereddoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
