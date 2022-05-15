import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServService {

  private urlProyecto: string = "https://quiet-reaches-10167.herokuapp.com/portfolio/proyectos"

  constructor(private http: HttpClient) {  }

  returnProyectos(): Observable <Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.urlProyecto}`);
  }

  createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.urlProyecto + "/create", proyecto);
  }

  editProyecto(id:number, proyecto:Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.urlProyecto + "/edit/" + id, proyecto);
  }

  deleteProyecto(id:number): Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.urlProyecto + "/delete/" + id);
  }

}
