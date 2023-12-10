import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../model/enseignant.model';
import { University } from '../model/university.model';
import { Image } from '../model/image.model';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styles:[]

})
export class UpdateEnseignantComponent implements OnInit {

  currentEnseignant = new Enseignant();
  universities! : University[];
  updatedUnivId! : number;
  myImage! :string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private enseignantService: EnseignantService) {
      // this.currentEnseignant.idEnseignant =0;
     }
  
     ngOnInit(): void {
    this.chargerUniversities();

    // this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe( ens =>{ this.currentEnseignant = ens; 
    //   this.updatedUnivId =   this.currentEnseignant.university.idUniversity;
    

    // this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe(ens =>{this.updatedUnivId= ens;
    //   console.log(ens);

    this.enseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['idEnseignant']).subscribe(ens => {
      this.currentEnseignant = ens;
      this.updatedUnivId = ens.university.idUniversity;
    } ) ;
       
        
  }
  chargerUniversities() {
    this.enseignantService.listeUniversities().subscribe(ens => {
      console.log(ens);
      this.universities = ens;
    });
  }
    updateEnseignant() {
      // Assurez-vous que this.universities est défini avant d'y accéder
    
        this.currentEnseignant.university = this.universities.find(
          (u) => u.idUniversity == this.updatedUnivId)!;

          //tester si l'image du produit a été modifiée
if (this.isImageUpdated)
{
this.enseignantService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentEnseignant.image = img;



        this.enseignantService.updateEnseignant(this.currentEnseignant).subscribe(
          (ens) => {
            this.router.navigate(['enseignants']);
          });
        });
        }
        else{
        this.enseignantService
        .updateEnseignant(this.currentEnseignant)
        .subscribe((ens) => {
        this.router.navigate(['enseignants']);
        });
        }
        }

    onImageUpload(event: any) {
      if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated =true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
      }
      }






  }

//   this.currentEnseignant.university = this.universities.find(cat => cat.idUniversity == this.currentEnseignant['idUniversity'])!;
//   this.EnseignantService
// .updateEnseignant(this.currentEnseignant)
// .subscribe((Voit) => {
// this.router.navigate(['enseignants']);
// });
// }







