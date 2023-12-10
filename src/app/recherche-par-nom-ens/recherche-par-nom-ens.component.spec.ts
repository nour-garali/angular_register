import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParNomEnsComponent } from './recherche-par-nom-ens.component';

describe('RechercheParNomEnsComponent', () => {
  let component: RechercheParNomEnsComponent;
  let fixture: ComponentFixture<RechercheParNomEnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParNomEnsComponent]
    });
    fixture = TestBed.createComponent(RechercheParNomEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
