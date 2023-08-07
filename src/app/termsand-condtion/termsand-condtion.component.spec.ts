import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandCondtionComponent } from './termsand-condtion.component';

describe('TermsandCondtionComponent', () => {
  let component: TermsandCondtionComponent;
  let fixture: ComponentFixture<TermsandCondtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsandCondtionComponent]
    });
    fixture = TestBed.createComponent(TermsandCondtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
