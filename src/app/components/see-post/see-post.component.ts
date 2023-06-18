import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  post !:Post;
  constructor(private _servicePost: PostService,
              ) {
  }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    this._servicePost.getPostsById(2).subscribe({
      next:(val:any)=>{
        this.post = val;
      }
    })
  }

}
