import { Component, OnInit } from '@angular/core';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;

  constructor(private portfolioServ:PortfolioServService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.proyectosList=data.proyectos;
    })
  }

}
