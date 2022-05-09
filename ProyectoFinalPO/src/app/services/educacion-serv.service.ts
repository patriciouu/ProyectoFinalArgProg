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

  returnEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEducacion);
  }

  createEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.urlEducacion + "/create", educacion);
  }

  editEducacion(id:number, educacion: Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.urlEducacion + "/edit/" + id, educacion);
  }

  deleteEducacion(id: number): Observable<Educacion>{
    return this.http.delete<Educacion>(this.urlEducacion + "/delete/" + id);
  }


}
