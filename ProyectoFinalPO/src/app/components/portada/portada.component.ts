import { Component, OnInit } from '@angular/core';
import { PersonaServService } from 'src/app/services/persona-serv.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  personasList: Persona[] = [];
  persona: Persona = new Persona;

  urlImagen: string = "https://quiet-reaches-10167.herokuapp.com/portfolio/files/"

  constructor(private personaService: PersonaServService) { }

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
