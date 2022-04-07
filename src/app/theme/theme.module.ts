import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { FormArrayComponent } from './Components/form-array/form-array.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule

  ],
  exports:[HeaderComponent, FooterComponent, MainComponent, SidenavComponent]
})
export class ThemeModule { }
