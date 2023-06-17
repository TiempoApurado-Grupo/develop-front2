

export class Post {
  id: number;
  title: string;
  description: string;
  characteristics: string;
  location: string;
  price: number;
  category: string;
  imgUrl: string;
  disponible: boolean;
  userAutorId: number;
  userRentId: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.characteristics = '';
    this.location = '';
    this.price = 0;
    this.category = '';
    this.imgUrl = '';
    this.disponible = false;
    this.userAutorId = 0;
    this.userRentId = 0;
  }
}
