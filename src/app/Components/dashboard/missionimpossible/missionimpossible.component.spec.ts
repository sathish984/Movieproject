import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionimpossibleComponent } from './missionimpossible.component';

describe('MissionimpossibleComponent', () => {
  let component: MissionimpossibleComponent;
  let fixture: ComponentFixture<MissionimpossibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionimpossibleComponent]
    });
    fixture = TestBed.createComponent(MissionimpossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
