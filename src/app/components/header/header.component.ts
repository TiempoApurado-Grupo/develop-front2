import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(private _router:Router,
              private _userService:UserService,
              private location:Location) {
  }
  ngOnInit(): void {


  }

  isLoged(){
    if(!this._userService.isLoged()){
      this._router.navigate(['/login'])
    }
  }
}
