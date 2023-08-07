import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnwickComponent } from './johnwick.component';

describe('JohnwickComponent', () => {
  let component: JohnwickComponent;
  let fixture: ComponentFixture<JohnwickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JohnwickComponent]
    });
    fixture = TestBed.createComponent(JohnwickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
