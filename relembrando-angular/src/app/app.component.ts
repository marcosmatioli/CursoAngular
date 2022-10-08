import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-tittle tittle="Bem vindo"></app-tittle>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked {

  public valor: number = 5;


  constructor(){}

  public adicionar(){
    return this.valor += 1;
  }

  ngOnInit(): void { // quando inicia o componente ele faz isso aqui ou seja na inicialização do componente
    console.log("Componente ONINIT")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Componente ngONChanges")
    
  }
  ngDoCheck(): void {
    console.log("Componente doCheck")
    
  }
  ngAfterContentChecked(): void {
    console.log("Componente AfterContentCheckec")
    
  }
  ngAfterContentInit(): void {
    console.log("Componente ngAfterContentInit")
    
  }
  ngAfterViewChecked(): void {
    console.log("Componente ngAfterViewChecked")
    
  }
  ngAfterViewInit(): void {
    console.log("Componente ngAfterViewInit")
    
  }
  
}
