import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit{

  post !:Post;
  constructor(private _servicePost: PostService, private route:ActivatedRoute) {
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
        }
      });
    });
  }

}
