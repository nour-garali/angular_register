import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

/*  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                   {"username":"nadhem","password":"123","roles":['USER']} ]; */

 

apiURL: string = 'http://localhost:8084/users';
token!:string;
private helper = new JwtHelperService();
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

  constructor(private router : Router,
              private http : HttpClient
) { }

  login(user : User)
  {
  return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
 
 saveToken(jwt:string){
    /*   localStorage.setItem('jwt',jwt);
      this.token = jwt;
      this.isloggedIn = true; 
      this.decodeJWT(); */
      localStorage.setItem('token', jwt);
      this.token = jwt;
      this.isloggedIn = true;
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isloggedIn));
      this.decodeToken();
  }
  decodeToken() {
    if (this.token == undefined) return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    console.log(this.roles);
    this.loggedUser = decodedToken.sub;
  }

  getToken():string {
    return this.token;
  }

  decodeJWT()
  {   if (this.token == undefined)
            return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  register(user: User): Observable<any> {
    
    return this.http.post<any>(`${this.apiURL}/register`, user, { responseType: 'json' });
  }
  
  checkVerifyCode(email: string, code: number): Observable<any> {
    const data = { email, code };
    return this.http.post<any>(`${this.apiURL}/checkcode`, data);
  }


 /* SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }*/

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
    return false;
    return (this.roles.indexOf('ADMIN') >=0) ;
    
  }  


  logout() {
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  this.isloggedIn = false;
 // localStorage.removeItem('jwt');
 // this.router.navigate(['/login']);
 localStorage.removeItem('token');
      localStorage.setItem('isLoggedIn', this.isloggedIn.toString());
      this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
   // this.getUserRoles(login);
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);   
  }



  /*getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }*/
    
}