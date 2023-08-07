import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetleComponent } from './beetle.component';

describe('BeetleComponent', () => {
  let component: BeetleComponent;
  let fixture: ComponentFixture<BeetleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeetleComponent]
    });
    fixture = TestBed.createComponent(BeetleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
