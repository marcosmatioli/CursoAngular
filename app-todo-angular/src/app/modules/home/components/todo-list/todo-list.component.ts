import { Component, DoCheck, OnInit } from '@angular/core';
import { last } from 'rxjs';

import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = [];
  
  constructor() { }
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  ngOnInit(): void {
  }
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }
  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
  }
  public setEmmitTaskList(event: string){
    this.taskList.push({task : event,  checked:false});
  }
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first,last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("List", JSON.stringify(this.taskList));
    }
  }
}