import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  {
   path : "", component : CountryComponent
  },
  {
    path :":id", component: CrudComponent
  }
  //{path:"country", component : CountryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
