import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor:boolean = true;
  public height:string = "20px"
  public bgc: string = ""
  public nome:string = "Matioli"
  public list:Array <{nome:string}> = [{nome: "Matioli"}];

  public date:Date = new Date()
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.valor) this.valor = false;
      else this.valor = true;

      if(this.height == "20px")
       {
        this.height = "40px"
        this.bgc = "pink"
      }else{
        this.height = "20px"
        this.bgc = "green"
      }
    },1000)
  }

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""
  }
}
