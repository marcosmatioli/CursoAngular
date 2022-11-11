import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-food-add></app-food-add>
  <br>
  <app-food-list></app-food-list>
  <br>
  <router-outlet></router-outlet>
  <br>
  `,
})
export class AppComponent {
  title = 'servicos-http-observable';
}
