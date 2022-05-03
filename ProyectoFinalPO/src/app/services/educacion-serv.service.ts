import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { Experiencia } from '../model/experiencia';



@Injectable({
  providedIn: 'root'
})
export class EducacionServService {

  private urlEducacion = "http://localhost:8080/portfolio/educacion"

  constructor(private http: HttpClient) { }

  returnEducacion(){
    this.http.get<Educacion[]>(this.urlEducacion);
  }


}
