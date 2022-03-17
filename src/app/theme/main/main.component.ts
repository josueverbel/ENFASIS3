import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Country } from 'src/app/Models/Country.model';
import { HttpClient } from '@angular/common/http';
import { CountryService } from 'src/app/services/Country.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy, AfterContentInit, AfterViewInit {
  public countries : Array<Country> = [];

  public  name : string = "";
  public  description : string = "";
  ///
  constructor(private service : CountryService) {

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
 
  
 
   Crear(){
     console.log(this.name);
     
   }
  

  //este siempre se esta ejecutando
  ngOnChanges(changes: SimpleChanges): void {
    //Este nos siver para escuchar cambios en nuestro componente
  }
  
  ngOnInit(): void {
    //Se ejkecutar para iniciar el componente y muere
    setTimeout(() => {
      
    }, 1000);
  }
  
  ngDoCheck(): void {
    //Dectetar cambios que angular no dectecta por si mismo
  }
  ngAfterContentInit(): void {
    //Despues de inicializar el contenido
  }
  ngAfterContentChecked(): void {
    //se ejecuta luego de que angular comprueba el contenido
  }

  ngAfterViewInit(): void {
     // despues que la vista se inicializa  (Dom)
  }

  ngAfterViewChecked(): void {
    // luego de que se ha comprobado la vista
  }


  ngOnDestroy(): void {
    //en el momento en que se destruye en componente


  }
}
