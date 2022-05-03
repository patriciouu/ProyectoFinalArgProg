import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion = new Educacion;
  educacionList:any;

  constructor(private portfolioServ:PortfolioServService) { }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion;    })
  }

}
