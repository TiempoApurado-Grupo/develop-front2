import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PostService} from "../../services/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user.service";
import {IPost} from "../../models/IPost";
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})

export class FormPostComponent implements OnInit {

  categories: string[] = [
    'rooms', 'department', 'houses', 'commercialSpace',
  ];

  formData = new FormData();
  filesArray: File[] = [];
  form: FormGroup
  isEdit: boolean = false
  post!:IPost
  postNew:IPost

  constructor(private _formB: FormBuilder,
              private postService:PostService,
              private _mediaService:MediaService,
              public router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private _userService:UserService,
              private location:Location,
              )
 {
    this.form = this._formB.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      characteristics: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],

    });
     this.postNew = {
         title: '',
         description: '',
         characteristics: '',
         location: '',
         price: 0,
         category: '',
         imageUrls: [],
         available: true,
         author_id: this._userService.idUserLoged(),
         renter_id: 0,
     };
  }


    ngOnInit(): void {
        if(!this._userService.isLoged()){
            this.location.back();
        }
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.isEdit = true;
                this.postService.getPostsById(params['id']).subscribe((result: any) => {
                    this.form.patchValue(result)
                    this.post = result
                });
            }
        })
    }

    handleFileInput(event: any) {
        const files: FileList = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            this.formData.append('files', file);
            this.filesArray.push(file);
        }
    }

    addImages(postId:number) {
        this._mediaService.addImagesToPost(postId, this.formData).subscribe((data:any)=>{
            console.log(data);
            this.router.navigate(['/listposts'])
        })
    }


    addPost() {
        if (this.form.valid) {
            if (this.isEdit) {
                this.updatePost();
            } else {
                this.postNew = this.form.value;
                this.postNew.author_id = this._userService.idUserLoged()
                console.log(this.postNew)
                this.postService.addPost(this.postNew).subscribe({
                    next: (val: any) => {

                        this.addImages(val.id)

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

        }
    }

  updatePost(){
      this.postNew = this.form.value;
      this.postNew.id = this.post.id;
      this.postService.updatePost(this.postNew).subscribe({
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
  }

  isImage(file: File): boolean {
    const allowedExtensions = ['png', 'jpg', 'jpeg'];
    const fileExtension = this.getFileExtension(file.name);
    return allowedExtensions.includes(fileExtension.toLowerCase());
  }

  getPreviewUrl(file: File): string | null {
    if (this.isImage(file)) {

      return URL.createObjectURL(file);
    }
    return null;
  }

  private getFileExtension(fileName: string): string {
    return fileName.split('.').pop() || '';
  }

  back()
    {
      this.location.back()
    }

}

