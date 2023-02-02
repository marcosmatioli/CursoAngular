import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//module interface
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

  private httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //passando header tipo um token e tals...
    })
  }

  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    //para adicionar na lista food

    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    ) 
  }

/*   public foodListAdd(value : string){
    this.foodListAlert(value);
    return this.list.push(value);
  } */

  public foodListAdd(value : string): Observable <FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }
  public foodListEdit(value: string, id : number): Observable <FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }
  public foodListDelete(id : number): Observable <FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }
/*   public foodListAlert(value : string){
    return this.imetEvent.emit(value);
  } */
  public foodListAlert(value : FoodList){
    return this.imetEvent.emit(value);
  }
}
