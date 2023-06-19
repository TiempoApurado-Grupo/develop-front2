import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent {


  categorias: string[] = [
    'rooms', 'department', 'houses', 'commercialSpace',
  ];

  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,
              private location: Location) {

    this.form = this._formB.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      caracteristics: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });
  }


  addPost(){
      if (this.form.valid) {
        alert("Valid")
      }else{
        alert("Invalid")
      }

      alert("Se publico tu inmueble");
      this.volver();
  }


  volver(){
    this.location.back();
  }

}
