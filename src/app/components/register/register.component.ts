import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userType:string[]=[
    'Tenant', 'Lessor',
  ];
  public acceptedTerms: boolean = false;
  public showPassword: boolean = false;

  _form:FormGroup;
  constructor(private _fb:FormBuilder,
              private router:Router) {

    this._form = this._fb.group({
      name:'',
      lastName:'',
      email:'',
      password:'',
      userType:'',
    })
  }
  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onFormSubmit(){
    console.log(this._form);
    if( this._form.valid){
      this.router.navigate(['/lessors'])
    }
  }

  toggleAceptado(checked: boolean) {
    this.acceptedTerms = checked;
  }


}
