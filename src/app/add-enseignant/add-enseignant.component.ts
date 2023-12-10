import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../model/university.model';
import { Image } from '../model/image.model';


@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html'
})
export class AddEnseignantComponent implements OnInit {


  newEnseignant = new Enseignant();
  universities!: University[];
  newIdUniv !: number;
  newUniversity!: University;
  uploadedImage!: File;
  imagePath: any;



  constructor(private enseignantService: EnseignantService, private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.chargerUniversities()
  }

  chargerUniversities() {
    this.enseignantService.listeUniversities().subscribe(ens => {
      console.log(ens);
      this.universities = ens;
    });
  }

  // addEnseignant(){
  //   //console.log(this.newEnseignant);
  //   this.newEnseignant.university = this.universities.find(unv => unv.idUniversity == this.newIdUniv)!;

  //   this.enseignantService.ajouterenseignant(this.newEnseignant)
  //   .subscribe(e => {console.log(e);

  //   this.router.navigate(['enseignants']);
  // });
  // }


  addEnseignant() {
    this.enseignantService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        
        this.newEnseignant.image = img;
        this.newEnseignant.university = this.universities.find(unv => unv.idUniversity
          == this.newIdUniv)!;
        this.enseignantService
          .ajouterenseignant(this.newEnseignant)
          .subscribe(() => {
            this.router.navigate(['enseignants']);
          });
      });
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }    

}