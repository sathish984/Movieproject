import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorstrangeComponent } from './doctorstrange.component';

describe('DoctorstrangeComponent', () => {
  let component: DoctorstrangeComponent;
  let fixture: ComponentFixture<DoctorstrangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorstrangeComponent]
    });
    fixture = TestBed.createComponent(DoctorstrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
