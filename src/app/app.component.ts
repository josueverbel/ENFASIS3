import { Component } from '@angular/core';
import { Country } from './Models/Country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Proyecto de prueba';

  public myvarString : string  = "";
  public myVarNumber : Number = 1;
  public myVarBool : boolean = false;


  constructor () {
    
    
    
  }


}


