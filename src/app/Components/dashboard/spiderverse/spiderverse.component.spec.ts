import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderverseComponent } from './spiderverse.component';

describe('SpiderverseComponent', () => {
  let component: SpiderverseComponent;
  let fixture: ComponentFixture<SpiderverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderverseComponent]
    });
    fixture = TestBed.createComponent(SpiderverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
