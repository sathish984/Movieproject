import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorComponent } from './thor.component';

describe('ThorComponent', () => {
  let component: ThorComponent;
  let fixture: ComponentFixture<ThorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThorComponent]
    });
    fixture = TestBed.createComponent(ThorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
