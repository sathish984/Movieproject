import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseofbeastComponent } from './riseofbeast.component';

describe('RiseofbeastComponent', () => {
  let component: RiseofbeastComponent;
  let fixture: ComponentFixture<RiseofbeastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiseofbeastComponent]
    });
    fixture = TestBed.createComponent(RiseofbeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
