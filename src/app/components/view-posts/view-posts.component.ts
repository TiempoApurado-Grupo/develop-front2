import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit{
  lessorId!:number;
  postId!:number;
  post: any;
  constructor(private postService: PostsService, private route:ActivatedRoute ) {
    this.post={};

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      this.lessorId= +params['lessorId'];
      this.getPostDetails();
    });
  }

  getPostDetails() {
    this.postService.getItemById(this.lessorId, this.postId).subscribe(post=> {
      this.post = post;
    });
  }

}
