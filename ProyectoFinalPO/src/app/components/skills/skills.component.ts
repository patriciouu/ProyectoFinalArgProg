import { Component, OnInit } from '@angular/core';
import { SkillServService } from 'src/app/services/skill-serv.service';
import { Skill } from 'src/app/model/skill';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill = new Skill;
  skillsList: Skill[] = [];
  
  public user$: Observable<any> = this.authServ.fireAuth.user;


  constructor(private skillService:SkillServService, private authServ: LoginServService) { }

  ngOnInit(): void {
   this.skillService.returnSkills().subscribe(
     data => this.skillsList = data
   )
  }

  createSki(skill: Skill){
    this.skillService.createSkill(skill).subscribe(
      data => this.skillService.returnSkills().subscribe(
        response => this.skillsList = response
      )
    )
  }

  onEdit(skill: Skill){
  }

  editSki(skill: Skill){
    this.skillService.editSkill(skill.skillId, skill).subscribe(
      data => this.skillService.returnSkills().subscribe(
        response => this.skillsList = response
      )
    )
  }

  deleteSki(skill: Skill){
    this.skillService.deleteSkill(skill.skillId).subscribe(
      data => this.skillService.returnSkills().subscribe(
        response => this.skillsList = response
      )
    )
  }

}
