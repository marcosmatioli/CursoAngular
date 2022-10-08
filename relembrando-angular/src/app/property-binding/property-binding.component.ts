import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public btndisabled:boolean = true;
  public imgSrc:string = "https://www.zooplus.pt/magazine/wp-content/uploads/2019/04/porquinho-da-india.jpg";
  public imgTitle:string = "Porquinhos da India";
  
  constructor() { }

  ngOnInit(): void {
  }
  public mudaStatus(){
    if(this.btndisabled == true)
    {
      this.btndisabled = false ;
    }
    else  this.btndisabled = true;

  console.log(this.btndisabled);
  }
}
