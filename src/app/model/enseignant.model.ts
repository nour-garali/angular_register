import { University } from "./university.model";
import { Image } from "./image.model";
export class Enseignant {
    [x: string]: any;
    idEnseignant! : number;
    nomEnseignant! : string;
    villeEnseignant! : string;
    dateNaissance! : Date ;
    university! : University;
    image! : Image;
    imageStr!:string;
    
    }
    