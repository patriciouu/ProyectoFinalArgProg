import { Component, OnInit } from '@angular/core';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList:any;

  constructor(private portfolioServ:PortfolioServService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.skillsList=data.skills;
    })
  }

}
