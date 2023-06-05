import {Component, OnInit} from '@angular/core';
import {Lessor} from "../../model/lessor";
import {PostsService} from "../../services/posts.service";
import {Profile} from "../../model/profile";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  lessors: Lessor[]=[];
  profiles:Profile[]=[];
  constructor(private postService: PostsService, ) {
  }

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts(){
    this.postService.getAllLessors().subscribe(lessors=>{
      this.lessors=lessors;
    });
    this.postService.getAllProfiles().subscribe(profiles=>{
      this.profiles=profiles;
    });
  }
}
