import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../models/User";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();

  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,) {

    this.form = this._formB.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  addUser(){

    if (this.form.valid) {
      alert("VALido");
      this.user.name=this.form.get('name')?.value;
      this.user.lastName=this.form.get('lastName')?.value;
      this.user.email=this.form.get('email')?.value;
      this.user.password=this.form.get('password')?.value;

      console.log(this.user);

    } else {
      alert('No valido');
    }
  }

}
