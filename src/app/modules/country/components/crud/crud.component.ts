import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
   id : string = "";

 

  public form: FormGroup;
  submitted = false;
  constructor(  private fb: FormBuilder, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
    this.form = this.fb.group({
        id: [0],
        name:["", Validators.required],
        description : ["", Validators.compose([Validators.required, Validators.minLength(12)])],
        status : [{value: true, enabled : false}, Validators.required  ],
        areas: this.fb.array([
          this.fb.group({
            id: [0],
            name:["", Validators.required],
            description : ["", Validators.compose([Validators.required, Validators.minLength(12)])],
            status : [{value: true, enabled : false}, Validators.required  ],
          }),
          this.fb.group({
            id: [0],
            name:["", Validators.required],
            description : ["", Validators.compose([Validators.required, Validators.minLength(12)])],
            status : [{value: true, enabled : false}, Validators.required  ],
          }),
          this.fb.group({
            id: [0],
            name:["", Validators.required],
            description : ["", Validators.compose([Validators.required, Validators.minLength(12)])],
            status : [{value: true, enabled : false}, Validators.required  ],
          }),
        ]),
    });
   }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        if (params['id']){
          this.id = params['id'];
        }
      });
    }
  get areas() {
    return this.form.controls.areas as FormArray;
  }
  get f() {
    return this.form.controls;
  }

  save(){
    this.submitted = true;
    console.log(this.form);
        
    if (this.form.invalid) {
      this.toastr.error('Formulario Invalido', 'Error!');
      return;
    
      
    }

    console.log( this.form.value);
    
  }
  clear (){
    this.form.reset();
  }

  addArea(){

  }
  deleteArea(){
    
  }

}
