import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private urlExperiencia: string = "https://quiet-reaches-10167.herokuapp.com/portfolio/experiencia";

  constructor(private http: HttpClient) { }

  returnExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.urlExperiencia}`);
  }

  createExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.urlExperiencia + "/create", experiencia);
  }

  editExperiencia(id:number, experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.urlExperiencia + "/edit/" + id, experiencia);
  }


  deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.urlExperiencia + "/delete/" + id);
  }
}
