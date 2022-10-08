import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked, OnDestroy  {

  @Input() public tittle: string = 'Bem Vindo';
  
  constructor() { }


  ngOnInit(): void { // quando inicia o componente ele faz isso aqui ou seja na inicialização do componente
    console.log("Componente ONINIT")
    
  }
  ngOnDestroy(): void {
   // console.log("Componente Destruido ONDESTROY")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("Componente ngONChanges")
    
  }
  ngDoCheck(): void {
    //console.log("Componente doCheck")
    
  }
  ngAfterContentChecked(): void {
    //console.log("Componente AfterContentCheckec")
    
  }
  ngAfterContentInit(): void {
    //console.log("Componente ngAfterContentInit")
    
  }
  ngAfterViewChecked(): void {
    //console.log("Componente ngAfterViewChecked")
    
  }
  ngAfterViewInit(): void {
   // console.log("Componente ngAfterViewInit")
    
  }
}
