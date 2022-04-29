import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia;
  experienciaList!: Experiencia[]


  constructor(private experienciaService:ExperienciaService) {}

  ngOnInit(): void {
    
      this.experienciaService.returnExperiencias().subscribe(
        data => this.experienciaList = data
      )
    
  }

  createExp():void{
    console.log(this.experiencia);
    this.experienciaService.createExperiencia(this.experiencia).subscribe(
      data =>this.experienciaService.returnExperiencias().subscribe(
        response=>this.experienciaList=response
      )
    )
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
