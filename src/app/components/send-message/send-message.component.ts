import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../../services/message.service";
import {IMessage} from "../../models/IMessage";
import {SendMessage} from "../../models/SendMessage";
import {User} from "../../models/User";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit{


  message: SendMessage = {
    content: '',
    recipientId: 0,
    authorId: 0,
  };

  userToresponse!:User

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

  }
  ngOnInit(): void {
    if(!this._serviceUser.isLoged()){
      this.location.back();
    }

    let idMessage
    this.route.params.subscribe(param =>{
      let idUser = param['id'];
      this._serviceUser.getUserById(Number(idUser)).subscribe({
        next:(val:any)=>{
          this.userToresponse = val;
          console.log(this.userToresponse);
        }
      })
    })

  }


 createMessage(){
    this.message.recipientId = Number(this.userToresponse.id);
   this.message.authorId = this._serviceUser.idUserLoged();
   this.message.content = this.form.get('contentMessage')?.value;
 }

  sendMessage(){

    if(this.form.valid){
      this.createMessage();

      console.log(this.message);

      this._serviceMessage.addMessage(this.message).subscribe({
        next:(val:any)=>{
          alert("Message send successfully")
        }
      })
      this.volver();

    }else{
      alert('Min 10 characters')
    }

  }

  volver(){
    this.location.back();
  }

}
