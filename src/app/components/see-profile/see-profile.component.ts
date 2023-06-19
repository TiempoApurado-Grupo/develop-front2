import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit{

  user !:User;
  userAutorId !: number;
  constructor(private _serviceUser: UserService,
              private _servicePost: PostService,
              private route:ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.obtenerUserAutor();
  }

  obtenerUserAutor(){
    this.route.paramMap.subscribe(params => {
      this.userAutorId = Number(params.get('id'));

      this._servicePost.getUserAutor(this.userAutorId).subscribe({
        next:(val:any)=>{
          this.user = val;
        }
      })

    });
  }

  volver(){
    this.location.back();
  }
}
