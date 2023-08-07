import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightzodiacComponent } from './knightzodiac.component';

describe('KnightzodiacComponent', () => {
  let component: KnightzodiacComponent;
  let fixture: ComponentFixture<KnightzodiacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnightzodiacComponent]
    });
    fixture = TestBed.createComponent(KnightzodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
