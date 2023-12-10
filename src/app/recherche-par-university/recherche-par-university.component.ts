import { Component } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { University } from '../model/university.model';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-recherche-par-university',
  templateUrl: './recherche-par-university.component.html',
  styleUrls: ['./recherche-par-university.component.css']
})
export class RechercheParUniversityComponent  {
  enseignants! : Enseignant[];
  IdUniversity! : number;
  universities! : University[];
  
constructor(private enseignantService: EnseignantService){ }
  ngOnInit(): void {
    //yess
    // this.enseignantService.listeUniversities().
    // subscribe(univs => {this.universities = univs._embedded.universities;
    //   console.log(univs);
    // });
      }

      onChange() {
        this.enseignantService.rechercherParUniversity(this.IdUniversity).
        subscribe(univs =>{this.enseignants=univs});
        }
        



    
}
