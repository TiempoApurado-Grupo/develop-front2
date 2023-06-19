import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit{

  userDestination !:User;

  constructor(private _serviceUser: UserService,
              private _servicePost: PostService,
              private route:ActivatedRoute,
              private location: Location) {
  }
  ngOnInit(): void {
    this.obtenerDestinationUser();
  }

  obtenerDestinationUser(){
    this.route.paramMap.subscribe(params => {
      const Id = Number(params.get('id'));

      this._serviceUser.getUserById(Id).subscribe({
        next:(val:any)=>{
          this.userDestination = val;
        }
      })

    });
  }

  sendMessahe(){
    alert("Mensaje enviado");

    this.volver();
  }


  volver(){
    this.location.back();
  }


}
