import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { LoginServService } from 'src/app/services/login-serv.service';
import { PersonaServService } from 'src/app/services/persona-serv.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personasList: Persona[] = [];
  persona: Persona = new Persona;

  public user$: Observable<any> = this.authServ.fireAuth.user;


  urlImagen: string = "https://quiet-reaches-10167.herokuapp.com/portfolio/files/"

  archivos: any = []

   constructor(private personaService:PersonaServService, private authServ: LoginServService) {

   }

  ngOnInit(): void {

    this.personaService.returnPersonas().subscribe(
      data => this.personasList=data
    )
  }

  onEdit(persona: Persona){
    const perso = persona;
    console.log(persona);
  }
  
  editPerso(persona: Persona){
    this.personaService.editPersona(persona.id, persona).subscribe(
      data => this.personaService.returnPersonas().subscribe(
        response => this.personasList = response
      )
    )
  }

  
}
