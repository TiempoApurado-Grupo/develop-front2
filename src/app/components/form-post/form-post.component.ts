import { Component } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent {
  // @ts-ignore
  selectedValue: string;

  categories: Category[] = [
    {value: 'department-0', viewValue: 'Department'},
    {value: 'business premises-1', viewValue: 'Business premises'},
    {value: 'room-2', viewValue: 'Room'},
    {value: 'home-3', viewValue: 'Home'},
  ];
}
