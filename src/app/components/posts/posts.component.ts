import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Lessor} from "../../model/lessor";
import {Post} from "../../model/post";
import {Property} from "../../model/property";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  lessors: Lessor[]=[];
  posts:Post[]=[];
  properties:Property[]=[];
  constructor(private postService: PostsService, ) {
  }

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts(){
    this.postService.getAllLessors().subscribe(lessors=>{
      this.lessors=lessors;
    });
    this.getPosts();
    this.postService.getAllProperties().subscribe(properties=>{
      this.properties=properties;
    });
  }
  getPosts(): void {
    this.postService.getAllPosts().subscribe(posts=>{
      this.posts=posts;
    });
  }
  onSearch(filterItem: string): void {
    if (filterItem) {
      this.postService.searchPosts(filterItem).subscribe(posts => {
        this.posts = posts;
      });
    } else {
      this.getPosts();
    }
  }

}
