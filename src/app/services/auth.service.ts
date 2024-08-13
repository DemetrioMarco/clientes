import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(user: string){
    const body = {
        "usuario": user
    };
    return this.http.post(`${ base_url }/ms-auth/auth.php`, body)
    .pipe(
      tap(
        (resp:any) => localStorage.setItem('token',resp.token)
      )
    );
  }

  getTokenValidation():Observable<boolean>{
    const token = localStorage.getItem('token') || '';
  
    const url = `${ base_url }/ms-auth/auth.php?token=${token}`;
     
    return this.http.get(url)
      .pipe(
        tap(
          (resp:any) =>{
            localStorage.setItem('token',resp.token);
          }),
          map( resp => true),
          catchError( error => of(false))
      );
    } 

}
