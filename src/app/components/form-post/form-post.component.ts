import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PostService} from "../../services/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user.service";
import {IPost} from "../../models/IPost";

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
  postNew!:IPost;

  constructor(private _formB: FormBuilder,
              private postService:PostService,
              public router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private _userService:UserService,
              private location:Location)
 {
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

    if(!this._userService.isLoged()){
      this.location.back();
    }

    this.postNew = {
      title: '',
      description: '',
      characteristics: '',
      location: '',
      price: 0,
      category: '',
      imgUrl: '',
      available: true,
      author_id: this._userService.idUserLoged(),
      renter_id: 0,
    };

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.postService.getPostsById(params['id']).subscribe((result: any) => {
          this.form.patchValue(result);
        });
      }
    })
    
  }

  addPost() {
    if (this.form.valid) {
      if (this.isEdit) {
        this.postService.updatePost(this.route.snapshot.params['id'], this.form.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['/listposts']);
            this.snackBar.open('Updated successfully', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'end'
            });
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {

        this.postNew = this.form.value;
        this.postNew.author_id = this._userService.idUserLoged();

        this.postService.addPost(this.postNew).subscribe({
          next: (val: any) => {
            this.router.navigate(['/listposts']);
            this.snackBar.open('Created successfully', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'end'
            });
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    } else {
      alert("Complet the all items");
    }
  }

  back()
    {
      this.location.back()
    }

}

