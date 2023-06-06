import {Component, NgModule} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";


@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})

export class AddTenantComponent {
  miFormularies: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.miFormularies=this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email : ['', [Validators.required, Validators.email]],
      cellPhone: ['', [Validators.required, Validators.pattern(/^(9)\d{8}$/)]],
      date: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\-\.,#]+$/)]]
    })
  }



}
