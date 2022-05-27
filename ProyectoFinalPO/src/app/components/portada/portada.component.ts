import { Component, OnInit } from '@angular/core';
import { PersonaServService } from 'src/app/services/persona-serv.service';
import { Persona } from 'src/app/model/persona';
import { LoginServService } from 'src/app/services/login-serv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  personasList: Persona[] = [];
  persona: Persona = new Persona;

  public user$: Observable<any> = this.authServ.fireAuth.user;

  constructor(private personaService: PersonaServService, private authServ: LoginServService) { }

  ngOnInit(): void {
    
    this.personaService.returnPersonas().subscribe(
      data => this.personasList=data
    
      )
  }

  onEdit(persona: Persona){
    const perso = persona;
  }
  
  editPerso(persona: Persona){
    this.personaService.editPersona(persona.id, persona).subscribe(
      data => this.personaService.returnPersonas().subscribe(
        response => this.personasList = response
      )
    )
  }
}
