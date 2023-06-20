

export interface IPost {
  id ?: number;
  title: string;
  description: string;
  characteristics: string;
  location: string;
  price: number;
  category: string;
  imgUrl: string;
  state: boolean;
  userAutorId: number;
  userRentId: number;
}
