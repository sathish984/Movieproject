import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamprojectComponent } from './adamproject.component';

describe('AdamprojectComponent', () => {
  let component: AdamprojectComponent;
  let fixture: ComponentFixture<AdamprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdamprojectComponent]
    });
    fixture = TestBed.createComponent(AdamprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
