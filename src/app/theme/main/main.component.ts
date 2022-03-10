import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public countries : Array<Country> = [];

  constructor() {
    let country1 : Country = {
      Id: 1, 
      Name : "Colombia", 
      Description : "Colombia"
    };
    let country2 : Country = {
      Id: 2, 
      Name : "Argentina", 
      Description : "Argentina"
    };
    let country3 : Country = {
      Id: 3, 
      Name : "Canada", 
      Description : "Canada"
    };
    
    this.countries.push(country1);
    this.countries.push(country2);
    this.countries.push(country3);

    let mayores = this.countries.filter(f => f.Id > 1);
    let pais3 = this.countries.find(f => f.Id == 3);
    let c : Country = { Id: 3, 
      Name : "Canada", 
      Description : "Canada"};
    if (pais3) {
      let index = this.countries.indexOf(pais3);
      this.countries.splice(index, 1);

    }
    this.countries.push(c);

    
  
    console.log(this.countries);
    console.log(mayores);
    console.log(pais3);
    
   }

  ngOnInit(): void {
  }

}
