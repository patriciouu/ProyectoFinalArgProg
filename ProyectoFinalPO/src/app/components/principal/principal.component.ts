import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaServService } from 'src/app/services/persona-serv.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personasList: Persona[] = [];
  persona: Persona = new Persona;

   constructor(private personaService:PersonaServService) {

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
