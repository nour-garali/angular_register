import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../model/enseignant.model';

@Component({
  selector: 'app-recherche-par-nom-ens',
  templateUrl: './recherche-par-nom-ens.component.html',
  styleUrls: ['./recherche-par-nom-ens.component.css']
})
export class RechercheParNomEnsComponent implements OnInit {
  
  nomEnseignant! : string;
  enseignants! : Enseignant[];
  
  
  constructor(private enseignantService: EnseignantService ) {}
 
  ngOnInit() : void {

  }
  rechercherEns(){
    this.enseignantService.rechercherParNomEns(this.nomEnseignant).
    subscribe(ens => {
    this.enseignants = ens; 
    console.log(ens)});
    }
    

}
