import { Component, OnInit } from '@angular/core';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;
  miPortfolio:any;

  constructor(private portfolioServ:PortfolioServService) {}

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.experienciaList = data.experiencia;
      console.log(data.experiencia);
    });
    
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    })
  }

}
