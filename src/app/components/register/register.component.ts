import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,
              private _userService:UserService) {

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

      this._userService.addUser(this.form.value).subscribe({
        next:(val:any)=>{
           this._userService.automaticLoged(val.id);
          this._router.navigate(["/welcome"])
        }
      })

    } else {
      alert('Invalid Form');
    }
  }
}
