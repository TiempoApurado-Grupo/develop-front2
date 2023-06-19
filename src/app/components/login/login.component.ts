import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;
  constructor(private _formB:FormBuilder,
              public _router:Router,
              private  _userService: UserService) {

    this.form = this._formB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

    validar(){

      if(this.form.valid){
        alert('Valido');
        this._userService.loginUser(this.form.get('email')?.value,this.form.get('password')?.value);

      }else{
        alert('Invalid');
      }

      this._router.navigate(['/listposts'])
    }

}
