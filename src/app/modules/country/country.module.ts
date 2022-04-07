import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from '../country/country.component';
import { CrudComponent } from './components/crud/crud.component';
import { CountryRoutingModule } from './country-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    CountryComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule,
    MatDividerModule
  ]
})
export class CountryModule { }
