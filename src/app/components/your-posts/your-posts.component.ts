import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

import {IPost} from "../../models/IPost";
import {PostService} from "../../services/post.service";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit{

  listPosts:IPost[]=[]

  displayedColumns: string[] = ['image', 'category', 'price', 'action'];
  dataSource !: MatTableDataSource<IPost>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private _postService: PostService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private location:Location) {}

  ngOnInit(): void {
    this.loadDatas();

  }

  loadDatas() {
    console.log('hipost')
    this._postService.getUserPosts().subscribe((postIds: number[]) => {
      const posts: IPost[] = [];
      postIds.forEach(postId => {
        this._postService.getPostsById(postId).subscribe((post: IPost) => {
          posts.push(post);
          console.log(posts)
          if (posts.length === postIds.length) {
            this.dataSource = new MatTableDataSource<IPost>(posts);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePost(id:number){
    const dialogRef=this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this._postService.deleteItem(id).subscribe((response:any)=>{
          this.listPosts=this.listPosts.filter((o:any)=>{
            return o.id !==id? o:false;
          });
          this.loadDatas();
          this.snackBar.open('Deleted successfully','Close',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'end'
          });
        });
        console.log(this.listPosts);
      }
    });
  }
editPost(id:number){
    this.router.navigate(['post/edit',id])
}

  volver(){
    this.location.back();
  }

}
