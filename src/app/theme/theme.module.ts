import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent, MainComponent, SidenavComponent]
})
export class ThemeModule { }
