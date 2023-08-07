import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthmanComponent } from './northman.component';

describe('NorthmanComponent', () => {
  let component: NorthmanComponent;
  let fixture: ComponentFixture<NorthmanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthmanComponent]
    });
    fixture = TestBed.createComponent(NorthmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
