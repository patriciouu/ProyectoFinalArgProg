import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from '../model/red-social';

@Injectable({
  providedIn: 'root'
})
export class RedSocialServService {

  private urlRedes: string = "http://localhost:8080/portfolio/redes";
  red: RedSocial = new RedSocial;

  constructor(private http: HttpClient) { }

  returnRedes():Observable <RedSocial[]>{
    return this.http.get<RedSocial[]>(`${this.urlRedes}`);
   }

   editRedes(id: number, red: RedSocial): Observable <RedSocial>{
    return this.http.put<RedSocial>(this.urlRedes + "/edit/" + id, red);
   }
  
}
