import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaserviceService } from 'src/app/services/experienciaservice.service';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList!: Experiencia[]


  // experienciaList:any;

  constructor(private experienciaService:ExperienciaserviceService) {}

  ngOnInit(): void {
    
    this.experienciaService.returnExperiencias().subscribe(
      data => this.experienciaList = data
    )
    
    // this.portfolioServ.obtenerDatos().subscribe(data =>{
    //   this.experienciaList = data.experiencia;
    //   console.log(data.experiencia);
    // });
    

  }

  eliminarExp(experiencia:Experiencia):void{
    console.log(experiencia)
    this.experienciaService.deleteExperiencia(experiencia.idExperiencia).subscribe(
      data =>this.experienciaService.returnExperiencias().subscribe(
        response=>this.experienciaList=response
      )
    )
  }

}
