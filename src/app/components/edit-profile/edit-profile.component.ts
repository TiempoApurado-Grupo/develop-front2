import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  genders:string[]=['Male', 'Female']

  form:FormGroup;
  constructor(private location:Location,
              private _formB:FormBuilder,
              private _router:Router,
              private _userService:UserService) {

    this.form = this._formB.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', [Validators.required, Validators.pattern(/^(Male|Female)$/)]],
      description: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      this._userService.getUserById(this._userService.idUserLoged()).subscribe({
        next:(val:User)=>{
          this.form.patchValue(val);
        }
      })
  }

  updateUser(){

    if(this.form.valid){
      alert('valid')

      console.log(this.form.value);
      this._userService.updateUser(this._userService.idUserLoged(),this.form.value).subscribe({
        next:(val:any)=>{
          alert("User eddited successfully");
        }
      })

    }else{
      alert('invalid')
    }
  }


  volver(){
    this.location.back();
  }

  logOut(){
    this._userService.logOut();
    this._router.navigate(['/home']);
  }


}
