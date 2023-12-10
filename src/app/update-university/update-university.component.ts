import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { University } from '../model/university.model';
import { EnseignantService } from '../services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {

  @Input()
  university!: University;

  @Input()
  ajout!: boolean;

  @Output()
  universityUpdated = new EventEmitter<University>();

  constructor(private router: Router, private enseignantService: EnseignantService) { }
  ngOnInit(): void {
  }

  saveUniversity() {
    this.universityUpdated.emit(this.university);
    this.university.nomUiversity=""
    this.ajout = true
  }

}
