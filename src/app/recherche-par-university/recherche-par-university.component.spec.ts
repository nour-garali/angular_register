import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParUniversityComponent } from './recherche-par-university.component';

describe('RechercheParUniversityComponent', () => {
  let component: RechercheParUniversityComponent;
  let fixture: ComponentFixture<RechercheParUniversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParUniversityComponent]
    });
    fixture = TestBed.createComponent(RechercheParUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
