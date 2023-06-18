import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit{

  listPosts:Post[]=[]

  displayedColumns: string[] = ['image', 'category', 'price', 'action'];
  dataSource !: MatTableDataSource<Post>;

  constructor(private _postService: PostService) {

  }

  ngOnInit(): void {
    this.loadDatas();

  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  loadDatas(){
    this._postService.getAllPosts().subscribe({
      next:(val:any)=>{
        this.listPosts = val;
        console.log(this.listPosts);

        this.dataSource = new MatTableDataSource<Post>(this.listPosts);

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 0);
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
