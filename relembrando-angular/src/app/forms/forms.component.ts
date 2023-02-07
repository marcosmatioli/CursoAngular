import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas : Array<{comida: string, preco : string}> = [
    {comida : "X-Salada", preco: "R$10,00"},
    {comida : "X-Egg", preco: "R$5,00"},
    {comida : "X-Bacon", preco: "R$20,00"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(form: any){
    if(form.valid){
      console.log(form.value)
    }
  }
}

  
