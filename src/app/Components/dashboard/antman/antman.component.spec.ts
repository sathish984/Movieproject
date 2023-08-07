import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntmanComponent } from './antman.component';

describe('AntmanComponent', () => {
  let component: AntmanComponent;
  let fixture: ComponentFixture<AntmanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntmanComponent]
    });
    fixture = TestBed.createComponent(AntmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
