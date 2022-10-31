import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>
  <br>
  <app-food-list></app-food-list>
  <br>
  <app-food-add></app-food-add>`,
})
export class AppComponent {
  title = 'servicos-http-observable';
}
