import { Component, OnInit } from '@angular/core';
//service
import { FoodListService } from '../services/food-list.service';
@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService:FoodListService) { }

  ngOnInit(): void {
  }
  public foodAddItem(value : string){
    return this.foodListService.foodListAdd(value);
  }
}
