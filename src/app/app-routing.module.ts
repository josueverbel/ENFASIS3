import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './modules/country/country.component';

const routes: Routes = [
  {
    path: 'country',
    loadChildren: () =>
    import('./modules/country/country.module').then(
      (mod) => mod.CountryModule
      ),
  },
  //{path:"country", component : CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
