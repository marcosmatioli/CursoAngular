import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit {

  public tittle:string = "Bem Vindo!";
  constructor() { }

  ngOnInit(): void { // quando inicia o componente ele faz isso aqui ou seja na inicialização do componente
    
  }

}
