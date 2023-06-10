import {Component, OnInit} from '@angular/core';
import {Property} from "../../model/property";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  properties:Property[]=[];

  constructor(private postService:PostsService) {
  }
  ngOnInit() {
    this.postService.getAllProperties().subscribe(properties=>{
      this.properties=properties;
    });
  }

}
