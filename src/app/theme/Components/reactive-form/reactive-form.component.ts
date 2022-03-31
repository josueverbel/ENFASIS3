import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form : FormGroup;
  submitted = false;
  constructor(private fb : FormBuilder, private toastr: ToastrService) {
    this.form = fb.group({
        id: [0],
        name:["", Validators.required],
        email : ["", [Validators.required, Validators.minLength(8), Validators.email ]],
        description : ["", Validators.compose([Validators.required, Validators.minLength(12)])],
        status : [{value: true, enabled : false}, Validators.required  ]
    });
   }

  ngOnInit(): void {
  }

  save(){
    this.submitted = true;
    console.log(this.form);
        
    if (this.form.invalid) {
      return;
      this.toastr.error('Formulario Invalido', 'Error!');
      
    }

    console.log( this.form.value);
    
  }

  clear (){
    this.form.reset();
  }
  get f() {
    return this.form.controls;
  }

}
