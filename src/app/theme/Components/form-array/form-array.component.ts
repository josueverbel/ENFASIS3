import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  public form: FormGroup;
  submitted = false;
  constructor(  private fb: FormBuilder, private toastr: ToastrService) {
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
}
