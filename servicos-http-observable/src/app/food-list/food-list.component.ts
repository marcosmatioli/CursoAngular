import { Component, OnInit } from '@angular/core';
//services
import { FoodListService } from '../services/food-list.service';
import { FoodList } from '../modules/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any;

  constructor(private foodListService:FoodListService) {
  }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );
    //ele fica escutando os eventos em tempo real, então realmente fica esperando uma ação e cair no sucess
    this.foodListService.imetEvent.subscribe(
      res => alert(`Olha você adicionou => ${res}`),
      error => alert(`deu algum erro!${error}`),
    );

  }
  
}
