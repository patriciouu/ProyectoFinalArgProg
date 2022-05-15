import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServService } from 'src/app/services/educacion-serv.service';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  educacion: Educacion = new Educacion;
  educacionList: any;

  urlImagen: string = "http://localhost:8080/portfolio/files/"

  constructor(private educacionService: EducacionServService) { }

  ngOnInit(): void {
    this.educacionService.returnEducacion().subscribe(data =>
      this.educacionList = data)
  }

  createEdu(educacion: Educacion):void{
    console.log(educacion);
    this.educacionService.createEducacion(educacion).subscribe(
      data => this.educacionService.returnEducacion().subscribe(
        response => this.educacionList = response 
      )
    )
  }

  onEdit(educacion: Educacion){
    const edu = educacion;
    console.log(edu);
  }

  editEdu(educacion:Educacion):void{
    console.log(educacion);
    this.educacionService.editEducacion(educacion.educacionId, educacion).subscribe(
      data => this.educacionService.returnEducacion().subscribe(
        response => this.educacionList = response
      )
    )
  }

  deleteEdu(educacion: Educacion):void{
    this.educacionService.deleteEducacion(educacion.educacionId).subscribe(
      data => this.educacionService.returnEducacion().subscribe(
        response => this.educacionList = response
      )
    )
  }

}
