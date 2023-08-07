import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoviesearchComponent } from './adminmoviesearch.component';

describe('AdminmoviesearchComponent', () => {
  let component: AdminmoviesearchComponent;
  let fixture: ComponentFixture<AdminmoviesearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmoviesearchComponent]
    });
    fixture = TestBed.createComponent(AdminmoviesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
