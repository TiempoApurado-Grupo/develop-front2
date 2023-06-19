import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {


  constructor(private location:Location,
              private _router:Router) {
  }



  updateUser(){



    this._router.navigate(['/listposts']);
  }


  volver(){
    this.location.back();
  }
}
