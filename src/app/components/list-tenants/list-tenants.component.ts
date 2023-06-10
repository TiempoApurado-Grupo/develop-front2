import { Component } from '@angular/core';
import {Tenant} from "../../model/tenant";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-list-tenants',
  templateUrl: './list-tenants.component.html',
  styleUrls: ['./list-tenants.component.css']
})

export class ListTenantsComponent {
  tenants:Tenant[]=[];
  constructor(private postService: PostsService, ) {
  }

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts(){
    this.postService.getAllTenants().subscribe(tenants=>{
      this.tenants=tenants;
    });
  }
}
