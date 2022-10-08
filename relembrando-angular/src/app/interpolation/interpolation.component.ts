import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public nome:string = "Marcos";
  public idade:number = 29;
  public idadeNova:number = 11;
  constructor() { }

  ngOnInit(): void {
  }

}