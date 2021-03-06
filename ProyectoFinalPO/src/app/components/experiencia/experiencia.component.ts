import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LoginServService } from 'src/app/services/login-serv.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia;
  experienciaList: Experiencia[] = []

  public user$: Observable<any> = this.authServ.fireAuth.user;

  constructor(private experienciaService: ExperienciaService, private authServ: LoginServService) { }

  ngOnInit(): void {

    this.experienciaService.returnExperiencias().subscribe(
      data => this.experienciaList = data
    )

  }

  createExp(): void {
    this.experienciaService.createExperiencia(this.experiencia).subscribe(
      data => this.experienciaService.returnExperiencias().subscribe(
        response => this.experienciaList = response
      )
    )
  }

  onEdit(experiencia:Experiencia): void{
    const exp = experiencia;
  }

  editExp(experiencia: Experiencia): void {
    this.experienciaService.editExperiencia(experiencia.idExperiencia, experiencia).subscribe(
      data => this.experienciaService.returnExperiencias().subscribe(
        response => this.experienciaList = response
      )
    )
  }

  eliminarExp(experiencia: Experiencia): void {
    this.experienciaService.deleteExperiencia(experiencia.idExperiencia).subscribe(
      data => this.experienciaService.returnExperiencias().subscribe(
        response => this.experienciaList = response
      )
    )
  }

}
