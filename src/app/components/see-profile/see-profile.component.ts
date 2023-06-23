import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit{

  user !:User;
  userAutorId !: number;
  constructor(private _serviceUser: UserService,
              private route:ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.obtenerUserAutor();
  }

  obtenerUserAutor(){
    this.route.paramMap.subscribe(params => {
      this.userAutorId = Number(params.get('id'));

      this._serviceUser.getUserById(this.userAutorId).subscribe({
        next:(val:any)=>{
          this.user = val;
          console.log(this.user);
        }
      })

    });
  }

  volver(){
    this.location.back();
  }
}
