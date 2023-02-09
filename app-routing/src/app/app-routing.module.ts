import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiverformsComponent } from './reactiverforms/reactiverforms.component';

//component routing
const routes: Routes = [{
  path: '',
  component: ReactiverformsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
