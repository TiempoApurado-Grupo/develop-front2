import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PostService} from "../../services/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";

interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit {

  categories: string[] = [
    'rooms', 'department', 'houses', 'commercialSpace',
  ];

  form: FormGroup;
  isEdit: boolean = false;

  constructor(private _formB: FormBuilder,
              private postService:PostService,
              public router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private location: Location) {

    this.form = this._formB.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      characteristics: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
      imgUrl: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.postService.getItem(params['id']).subscribe((result: any) => {
          this.form.patchValue(result);
        });
      }
    });
  }
  addPost() {
    if (this.form.valid) {
      if (this.isEdit){
        this.postService.updateItem(this.route.snapshot.params['id'], this.form.value).subscribe({
          next: (val: any) =>{
            this.router.navigate(['/listposts']);
            this.snackBar.open('Updated successfully','Close',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'end'
            });
        },
          error:(err:any)=>{
            console.error(err);
          }
        });
      } else{
        this.postService.createItem(this.form.value).subscribe({
          next: (val: any)=>{
            this.router.navigate(['/listposts']);
            this.snackBar.open('Created successfully', 'Close',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'end'
            });
          },
          error:(err:any)=>{
            console.error(err);
          }
        });
      }
    }
  }
  back()
  {
    this.location.back();
  }
}
