import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayManComponent } from './gray-man.component';

describe('GrayManComponent', () => {
  let component: GrayManComponent;
  let fixture: ComponentFixture<GrayManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrayManComponent]
    });
    fixture = TestBed.createComponent(GrayManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
