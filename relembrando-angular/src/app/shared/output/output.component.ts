import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public EnviarDados = new EventEmitter();
  
  public list: Array<{nome: string, idade:number}> = [
  {nome : "Matioli", idade: 27},
  {nome : "Xesque", idade: 45},
  {nome : "Tapa", idade: 30}
]

  constructor() { }

  ngOnInit(): void {
  }
  public getDados(event: number){
    this.EnviarDados.emit(this.list[event]) // enviar dados para outro componente no caso esse index da array
    console.log(this.list[event])
  }
}
