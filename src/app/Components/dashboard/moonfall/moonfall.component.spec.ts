import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonfallComponent } from './moonfall.component';

describe('MoonfallComponent', () => {
  let component: MoonfallComponent;
  let fixture: ComponentFixture<MoonfallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonfallComponent]
    });
    fixture = TestBed.createComponent(MoonfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
