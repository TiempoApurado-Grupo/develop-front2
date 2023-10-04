import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit{

  stars: number[] = [1, 2, 3, 4, 5]
  selectedStars: number = 5

  user !:User;
  userAutorId !: number;
  constructor(private _serviceUser: UserService,
              private route:ActivatedRoute,
              private location: Location) {
  }
  ngOnInit(): void {
    this.obtenerUserAutor();
  }
  obtenerUserAutor(){
    this.route.paramMap.subscribe(params => {
      this.userAutorId = Number(params.get('id'));

      this._serviceUser.getUserById(this.userAutorId).subscribe({
        next:(val:any)=>{
          this.user = val;
        }
      })
    });
  }

  selectStars(stars: number) {
    this.selectedStars = stars;
  }

  saveStars() {
    this._serviceUser.updateRankUser(this.user.id, this.selectedStars).subscribe(
        (response: any) => {
          console.log('Rating updated successfully', response);
          window.location.reload()
        },
        (error) => {
          console.error('Error updating rating', error);
        }
    );
  }

  back(){
    this.location.back();
  }
}
