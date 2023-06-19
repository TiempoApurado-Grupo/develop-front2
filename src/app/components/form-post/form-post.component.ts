import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserService} from "../../services/user.service";

interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit{


  categorias: string[] = [
    'rooms', 'department', 'houses', 'commercialSpace',
  ];

  form:FormGroup;
  constructor(private _formB:FormBuilder,
              private _userService:UserService,
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
  ngOnInit(): void {
    if(!this._userService.isLoged()){
      this.location.back();
    }
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
