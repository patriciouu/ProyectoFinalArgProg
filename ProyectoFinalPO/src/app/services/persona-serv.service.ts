import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServService {

  private urlPersona: string = "http://localhost:8080/portfolio/persona"

  constructor(private http: HttpClient) { }

  returnPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.urlPersona}`);
  }

  editPersona(id:number, persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.urlPersona + "/edit/ " + id, persona);
  }
}