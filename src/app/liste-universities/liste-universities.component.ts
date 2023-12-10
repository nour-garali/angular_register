import { Component } from '@angular/core';
import { University } from '../model/university.model';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-liste-universities',
  templateUrl: './liste-universities.component.html',
  styleUrls: ['./liste-universities.component.css']
})
export class ListeUniversitiesComponent {
  universities!: University[];
  ajout: boolean = true;

  updatedUniv: University = {
    "idUniversity": 0, "nomUiversity": "",
    villeUniversity: '',
    nbEnseigant: 0
  };
  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.chargerUniversities();
  }

  chargerUniversities() {
    this.enseignantService.listeUniversities().subscribe(ens => {
      console.log(ens);
      this.universities = ens;
    });
  }

  universityUpdated(u: University) {
    console.log("university updated event", u);
    this.enseignantService.ajouterUniversity(u).
      subscribe(() => this.chargerUniversities());
  }

  updateUniv(u: University) {
    this.updatedUniv = u;
    this.ajout = false;
  }
}



