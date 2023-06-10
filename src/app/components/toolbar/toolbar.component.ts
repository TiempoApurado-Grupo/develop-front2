import {Component, EventEmitter, Output} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() searchQuery = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<void>();
  filterItem:string=' ';
  constructor(private postService: PostsService, private route:ActivatedRoute ) {  }

  ngOnInit() {

  }
  onSearch(){
    this.searchQuery.emit(this.filterItem);
  }
}
