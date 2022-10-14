import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input [contador]="valor"></app-input>
  <button (click)="adicionar()">Adicionar no valor de outro componente</button>
  <br>
  <app-new-component></app-new-component>
  <app-diretivas-atributos>
<h1>Aulas de Diretivas de Atributos NG CONTENT</h1>
<h3>Fim da aula de diretivas de atributos NG CONTENT</h3>
  </app-diretivas-atributos>
  <app-diretivas></app-diretivas>
  <app-two-way-binding></app-two-way-binding>
  <app-event-binding></app-event-binding>
  <app-property-binding></app-property-binding>
  <app-interpolation></app-interpolation>
  <app-tittle *ngIf="destruir"></app-tittle>
  <button (click)="destruirComponent()">Mostrar / Ocultar</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked {

  public valor: number = 0;
  public addValue : number = 10;
  public destruir:boolean = true;
  public nome: string = "Nome 1";

  constructor(){}

  public adicionar(){
    return this.valor += 1;
  }
  public destruirComponent(){
    if(this.destruir == false)
    {
      this.destruir = true;
    }
    else this.destruir = false;
    console.log(this.destruir);
  }
  ngOnInit(): void { // quando inicia o componente ele faz isso aqui ou seja na inicialização do componente
    console.log("Componente ONINIT")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log("Componente ngONChanges")
    
  }
  ngDoCheck(): void {
   // console.log("Componente doCheck")
    
  }
  ngAfterContentChecked(): void {
   // console.log("Componente AfterContentCheckec")
    
  }
  ngAfterContentInit(): void {
   // console.log("Componente ngAfterContentInit")
    
  }
  ngAfterViewChecked(): void {
    //console.log("Componente ngAfterViewChecked")
    
  }
  ngAfterViewInit(): void {
   // console.log("Componente ngAfterViewInit")
    
  }
  
}
