import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  titulo:string = "Agregar Experiencia";

  constructor(private experienciaServ:ExperienciaService) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.experiencia);
  }

}
