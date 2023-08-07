import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelsComponent } from './marvels.component';

describe('MarvelsComponent', () => {
  let component: MarvelsComponent;
  let fixture: ComponentFixture<MarvelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelsComponent]
    });
    fixture = TestBed.createComponent(MarvelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
