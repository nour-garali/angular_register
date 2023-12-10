import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUniversitiesComponent } from './liste-universities.component';

describe('ListeUniversitiesComponent', () => {
  let component: ListeUniversitiesComponent;
  let fixture: ComponentFixture<ListeUniversitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeUniversitiesComponent]
    });
    fixture = TestBed.createComponent(ListeUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
