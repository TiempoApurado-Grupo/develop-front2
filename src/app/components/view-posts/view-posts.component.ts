import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../model/post";
import {Property} from "../../model/property";

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit{
  post: Post | undefined;
  property: Property | undefined;
  constructor(private postService: PostsService, private route:ActivatedRoute ) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      if (postId) {
        this.postService.getItemById(postId).subscribe(data => {
          console.log(data); // Verifica los datos recibidos
          if (data) {
            this.post = data.post;
            this.property = data.property;
          }
        });
      }
    });
  }
}
