import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
import { RechercheParNomEnsComponent } from './recherche-par-nom-ens/recherche-par-nom-ens.component';
import { ListeUniversitiesComponent } from './liste-universities/liste-universities.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    EnseignantsComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent,
    RechercheParUniversityComponent,
    RechercheParNomEnsComponent,
    ListeUniversitiesComponent,
    UpdateUniversityComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
