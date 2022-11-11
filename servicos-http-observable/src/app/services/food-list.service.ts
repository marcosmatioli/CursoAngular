import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
 //a lista está aqui no services

  public imetEvent = new EventEmitter();
  private url : string = "http://localhost:3000/"; //list-food

  private list: Array <String> = [
    "X Bacon","Feijão","Ovo"
  ];
  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(): Observable<FoodList> {
    //para adicionar na lista food
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    ) 
  }
  public foodListAdd(value : string){
    this.foodListAlert(value);
    return this.list.push(value);
  }
  public foodListDelet(value : string){
    return this.list.pop();
  }
  public foodListAlert(value : string){
    return this.imetEvent.emit(value);
  }
}
