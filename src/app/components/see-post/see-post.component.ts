import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  post !:IPost;
  constructor(private _servicePost: PostService,
              private route:ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      this._servicePost.getPostsById(postId).subscribe({
        next: (val: any) => {
          this.post = val;
          console.log(val)
        }
      });
    });
  }

  rentar(){
    alert("Rentaste esta propiedad");
    this.volver();
  }
  volver(){
    this.location.back();
  }
}
