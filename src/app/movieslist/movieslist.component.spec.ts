import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieslistComponent } from './movieslist.component';

describe('MovieslistComponent', () => {
  let component: MovieslistComponent;
  let fixture: ComponentFixture<MovieslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieslistComponent]
    });
    fixture = TestBed.createComponent(MovieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
