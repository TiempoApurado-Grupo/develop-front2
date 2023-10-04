import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  postsCopy: IPost[] = [];
  posts: IPost[] = [];
  category:string=''

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (val: any) => {
        this.posts = val;
        this.postsCopy = this.posts
      }
    });
  }


  applyFilter(event: Event) {
    this.posts = this.postsCopy
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();

    if (filterValue === '') {
      this.posts = this.postsCopy
    } else {
      this.posts = this.posts.filter(post => {
        return post.title.toLowerCase().includes(filterValue);
      });
    }
  }

  selectCategory(newCategory: string) {
    if(this.category == newCategory){
      this.category = ''
    }else{
      this.category = newCategory
    }

    if (this.category === '') {
      this.posts = this.postsCopy
    } else {
      this.posts = this.postsCopy.filter(post => {
        return post.category === this.category
      });
    }
  }

}
