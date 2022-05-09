import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServService {

  private urlSkills: string = "https://quiet-reaches-10167.herokuapp.com/portfolio/skills"

  constructor(private http: HttpClient) { }

  returnSkills():Observable <Skill[]>{
   return this.http.get<Skill[]>(`${this.urlSkills}`);
  }

  createSkill(skill: Skill): Observable <Skill>{
    return this.http.post<Skill>(this.urlSkills + "/create", skill);
  }

  editSkill(id:number, skill: Skill): Observable <Skill>{
    return this.http.put<Skill>(this.urlSkills + "/edit/" + id, skill);
  }

  deleteSkill(id:number): Observable<Skill>{
    return this.http.delete<Skill>(this.urlSkills + "/delete/" + id);
  }
}
