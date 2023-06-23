import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  nameUser : string="";
  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {
    this._userService.getUserById(
      this._userService.idUserLoged()).subscribe({
        next:(val:any) => {
          this.nameUser = val.name +" "+val.lastName;
        }
    })
  }
}
