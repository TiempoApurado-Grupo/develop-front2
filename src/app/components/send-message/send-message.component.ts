import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../../services/message.service";
import {IMessage} from "../../models/IMessage";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit{

  userDestination !:User;
  m !: IMessage;

  form:FormGroup;
  constructor(private _serviceUser: UserService,
              private _servicePost: PostService,
              private _serviceMessage:MessageService,
              private route:ActivatedRoute,
              private location: Location,
              private _formB:FormBuilder,) {

    this.form = this._formB.group({
      contentMessage: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.m = {
      content: '',
      idUserAuthor: 0,
      idUserDestination: 0,
      read:false,
    };
  }
  ngOnInit(): void {
    if(!this._serviceUser.isLoged()){
      this.location.back();
    }

    this.obtenerDestinationUser();
  }

  obtenerDestinationUser(){
    this.route.paramMap.subscribe(params => {

      const Id = Number(params.get('id'));
      this.m.idUserDestination = Id;

      this._serviceUser.getUserById(Id).subscribe({
        next:(val:any)=>{
          this.userDestination = val;
        }
      })

    });
  }

  sendMessahe(){


      this.m.idUserAuthor = this._serviceUser.idUserLoged();
      this.m.content = this.form.get('contentMessage')?.value;

      this._serviceMessage.addMessage(this.m).subscribe({
        next:(val:any)=>{
          alert("Sended message");
        }
      })
    this.volver();
  }

  volver(){
    this.location.back();
  }


}
