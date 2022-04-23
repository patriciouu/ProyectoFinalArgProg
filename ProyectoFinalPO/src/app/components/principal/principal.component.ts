import { Component, OnInit } from '@angular/core';
import { PortfolioServService } from 'src/app/services/portfolio-serv.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  miPortfolio: any;

  constructor(private portfolioServ:PortfolioServService) {

   }

  ngOnInit(): void {
    this.portfolioServ.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data
    });
  }
  
  
}
