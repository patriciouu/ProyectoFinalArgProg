import { Component, OnInit } from '@angular/core';
import { ProyectoServService } from 'src/app/services/proyecto-serv.service';
import { Proyecto } from 'src/app/model/proyecto';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto = new Proyecto;
  proyectosList!: Proyecto[];

  public user$: Observable<any> = this.authServ.fireAuth.user;


  urlImagen: string = "http://localhost:8080/portfolio/files/"

  constructor(private proyectoService:ProyectoServService, private authServ: LoginServService) { }

  ngOnInit(): void {
    
    this.proyectoService.returnProyectos().subscribe(
      data => this.proyectosList = data
      )
  
  }

  createProy(proyecto:Proyecto){
    this.proyectoService.createProyecto(proyecto).subscribe(
      data => this.proyectoService.returnProyectos().subscribe(
        response => this.proyectosList = response
      )
    )
  }

  onEdit(proyecto:Proyecto){
    console.log(proyecto);
  }

  editProy(proyecto: Proyecto){
    this.proyectoService.editProyecto(proyecto.proyectoId, proyecto).subscribe(
      data => this.proyectoService.returnProyectos().subscribe(
        response => this.proyectosList = response
      )
    )
  }

  deleteProy(proyecto:Proyecto){
    this.proyectoService.deleteProyecto(proyecto.proyectoId).subscribe(
      data => this.proyectoService.returnProyectos().subscribe(
        response => this.proyectosList = response
      )
    )
  }


}
