import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServService {

  private apiUrl:string = "https://salty-caverns-78118.herokuapp.com/portfolio"

  constructor(private http:HttpClient) { }

  obtenerDatosAPI():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/dataprueba.json');
  }
}
