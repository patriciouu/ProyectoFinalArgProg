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

   constructor(private personaService:PersonaServService) {

   }

  ngOnInit(): void {

    this.personaService.returnPersonas().subscribe(
      data => this.personasList=data
    )
  }
  
  
}
