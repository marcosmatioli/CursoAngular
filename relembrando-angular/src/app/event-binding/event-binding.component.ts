import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public qtd:number = 0;
  public position: {x:number, y:number} = {x: 0, y: 0}
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor : string){
    alert(valor);
    this.qtd +=1;
  }
  public alertaInfo2(valor : MouseEvent){ // basicamente volta um point click event
    alert(valor);
    console.log(valor)
    this.qtd +=1;
  }
  public mudarBackground(){
    //document.getElementById("quadrado")?.style.backgroundColor
  }
  public movermouse(valor : any){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
    console.log(`valor de X: ${this.position.x} // valor de Y: ${this.position.y} `)
    //queria mudar o background quando eu coloca-se o mouse dentro mas preciso seguir no curso
    //document.getElementById("mouseEvent1")?.style.backgroundColor
    
  }
}
