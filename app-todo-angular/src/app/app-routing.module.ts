import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Pages, importar aqui para abrir primeiro como a rota
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
