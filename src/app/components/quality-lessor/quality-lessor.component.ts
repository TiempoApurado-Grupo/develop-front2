import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-lessor',
  templateUrl: './quality-lessor.component.html',
  styleUrls: ['./quality-lessor.component.css']
})
export class QualityLessorComponent {
  selectedValue: number = 5;
  stars: string[] = ['star', 'star', 'star', 'star', 'star-outline'];

  lessors =[
    {
      imgURL:"https://images.pexels.com/photos/4862429/pexels-photo-4862429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Nelly Camacho",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui sit amet nulla finibus aliquet. Sed euismod scelerisque justo nec efficitur. Sed nec tortor arcu. Morbi tristique sem id finibus bibendum.",
      rank:3,
    },
    {

      imgURL:"https://library.sportingnews.com/2022-12/Lionel%20Messi%20-%20World%20Cup%20Final%202022%20penalty%20celebration%20vs%20France%20-%20181222-16x9.jpg",
      name: "Leo Messi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non interdum velit. Proin cursus mauris eu consequat efficitur. Nulla eget ullamcorper nulla. Suspendisse sollicitudin turpis in odio venenatis, eu consectetur nisl ullamcorper. Pellentesque eleifend odio sit amet lobortis maximus. Duis ullamcorper, dolor sed iaculis fermentum, lacus odio vulputate tortor, a auctor nulla ligula sed ex. ",
      rank:4,
    },
    {
      imgURL:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZJCPGFV6RRHXTOHHJ5AZHCSVNM.jpg",
      name: "Cristian Cueva",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci eu libero volutpat, vel iaculis enim interdum. Morbi id turpis a lectus fermentum luctus. Suspendisse potenti. Nulla eu urna metus. Nulla in enim sollicitudin, vehicula lorem in, tempus nunc. Curabitur vel ",
      rank:1,
    },
    {
      imgURL:"https://e.rpp-noticias.io/xlarge/2023/06/02/500450_1435932.jpg",
      name: "Gianluca Lapadula",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies orci eu libero volutpat, vel iaculis enim interdum. Morbi id turpis a lectus fermentum luctus. Suspendisse potenti. Nulla eu urna metus. Nulla in enim sollicitudin, vehicula lorem in, tempus nunc. Curabitur vel ",
      rank:5,
    }
  ]
  rateProfile(starIndex: number, rank:number) {
    rank = starIndex + 1;
  }

  getStarRange(rank:number): string[] {
    return this.stars.slice(0, rank);
  }
}
