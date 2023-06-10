import {Component, EventEmitter, Output} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header-tenant',
  templateUrl: './header-tenant.component.html',
  styleUrls: ['./header-tenant.component.css']
})
export class HeaderTenantComponent {
  @Output() searchQuery = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<void>();
  filterItem:string=' ';
  constructor(private postService: PostsService, private route:ActivatedRoute ) {  }

  onSearch(){
    this.searchQuery.emit(this.filterItem);
  }

}
