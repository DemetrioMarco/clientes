import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Event } from '../model/event.model'

@Injectable({
  providedIn: 'root'
})
export class SapService {

  private baseUrl = '/api';
  private serviceLayer = '/serviceLayer';

  constructor(private http: HttpClient) {}

  // public getSocios(){

  //   this.login().subscribe();

  //   this.dataSocio().subscribe(
  //     resp => console.log(resp)
  //   );

  // }

  private dataSocio(){

    const head = {
      "Cookie":"B1SESSION=" + localStorage.getItem('session') 
    }
    
   return this.http.get(this.serviceLayer, );
  }

  private login(){
    const body = {
      "CompanyDB":"SBO_AMER",
      "UserName":"manager",
      "Password":"Mlsystem0"
    }
    return this.http.post<any>(this.baseUrl,body)
      .pipe(
        tap( resp => localStorage.setItem('session', resp.SessionId))
      );
  }

  public getCobranza(){

    const codSocio = localStorage.getItem('cod');

    const body = {
      "code": codSocio
    };

  
    return this.http.post<any>('http://35.174.29.99/ServiciosSAP/api/cobranza', body)
  }

  public getSocios(){
    const body = {
      "email":"soporte@gruporosmar.com"
    };
    return this.http.post<any>('http://35.174.29.99/ServiciosSAP/api/Socio/', body);
  }

  public getVisitas(): Observable<Event[]>{
    const codSocio = localStorage.getItem('cod');

    const body = {
      "code": codSocio
    };

    return this.http.post<Event[]>('http://35.174.29.99/ServiciosSAP/api/visitas', body)
  }

}
