import { Component, OnInit } from '@angular/core';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;

  constructor(private portfolioServ:PortfolioServService) {}

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.experienciaList = data.experiencia;
      console.log(data.experiencia);
    });
    

  }

  eliminarExp(experiencia: any){
    console.log(experiencia)
  }

}
