import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

    public showthis: boolean = true;
    public showinfo:string = "NÃO CLICOU";
    public nome:string =  'numeros'
    public list : Array <{nome:string,idade:number}> = [
      {nome: "Nome1",idade: 10},
      {nome: "Nome2",idade: 20},
      {nome: "Nome3",idade: 30},
      {nome: "Nome4",idade: 40}
    ]
  constructor() { }

  ngOnInit(): void {
    
  }
  public falseandtrue(){
    if(this.showthis){
      this.showthis = false;
      this.showinfo = "false"
    }else{
      this.showthis = true;
      this.showinfo = "true"
    }
    console.log(this.showthis)
  }
  public onClickAddList(){
    //let xnome : any 
    //let xidade: any
   // xnome  = document.getElementById("textidade")?.innerText
    //xidade  = document.getElementById("textnome")?.innerText
    //this.list.push({nome : xnome, idade :xidade })
    this.list.push({nome : "newName", idade : 22 })
  }
  public onClickEventList(event:number)
  {
    this.list.splice(event,1) // retira o elemento da array que vc clicar
   // this.list.pop(); //retira o ultimo elemento da array
  }
}