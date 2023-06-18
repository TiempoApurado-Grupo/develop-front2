import {Component, EventEmitter, Output} from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent {
  @Output() searchQuery = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<void>();
  filterItem:string=' ';
  constructor(private postService: PostService, private route:ActivatedRoute ) {  }

  onSearch(){
    this.searchQuery.emit(this.filterItem);
  }
}
