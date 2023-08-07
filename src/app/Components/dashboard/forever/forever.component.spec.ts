import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverComponent } from './forever.component';

describe('ForeverComponent', () => {
  let component: ForeverComponent;
  let fixture: ComponentFixture<ForeverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverComponent]
    });
    fixture = TestBed.createComponent(ForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
