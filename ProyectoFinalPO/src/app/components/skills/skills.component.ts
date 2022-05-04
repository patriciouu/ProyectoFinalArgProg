import { Component, OnInit } from '@angular/core';
import { SkillServService } from 'src/app/services/skill-serv.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill = new Skill;
  skillsList: Skill[] = [];

  constructor(private skillService:SkillServService) { }

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
    console.log(skill);
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
