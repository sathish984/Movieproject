import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extraction2Component } from './extraction2.component';

describe('Extraction2Component', () => {
  let component: Extraction2Component;
  let fixture: ComponentFixture<Extraction2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Extraction2Component]
    });
    fixture = TestBed.createComponent(Extraction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
