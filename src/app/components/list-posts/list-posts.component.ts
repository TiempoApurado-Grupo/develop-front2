import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (val: any) => {
        this.posts = val;
        console.log(this.posts);
      }
    });
  }

  onSearch(filterItem: string): void {
    if (filterItem) {
      this.postService.searchPosts(filterItem).subscribe(posts => {
        this.posts = posts;
      });
    } else {
      this.getAllPosts();
    }
  }

}
