import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaserviceService {

  private urlExperiencia:string = "http://localhost:8080/portfolio/experiencia";

  constructor( private http:HttpClient) { }

  returnExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.urlExperiencia}`);
  }

  deleteExperiencia(id:number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.urlExperiencia + "/delete/" + id);
  }
}

  // getAll():Observable<Estudiante[]>{
  // return this.http.get<Estudiante[]>(this.url)
  // }