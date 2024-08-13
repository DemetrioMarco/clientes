import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( 
    private http: HttpClient, 
    private router: Router ) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getUsers(){
    return this.http.get<any>('http://localhost/microservicios/users.php');
  }

  getUserByPass( email: string , password: string){
    const body = {
      "usuario": email,
      "contrasena": password
  };

    return this.http.post<any>('http://localhost/microservicios/ms-usuarios/getUser.php',body);
  }

  insertUser( user:  User){
    return this.http.post<any>('http://localhost/microservicios/ms-usuarios/create.php',user, { headers: this.headers });
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
