import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  userIdLoged :number = 0
  post !:IPost;
  constructor(private _servicePost: PostService,
              private route:ActivatedRoute,
              private location: Location,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this.obtenerPost();
    this.userIdLoged = this._userService.idUserLoged()
  }

  obtenerPost(){
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      this._servicePost.getPostsById(postId).subscribe({
        next: (val: any) => {
          this.post = val;
        }
      });
    });
  }

  rentar(){
    this.volver();
  }
  volver(){
    this.location.back();
  }
}
