

export interface IPost {
  id ?: number;
  title: string;
  description: string;
  characteristics: string;
  location: string;
  price: number;
  category: string;
  imgUrl: string;
  available: boolean;
  userAuthorId: number;
  userRentId: number;
}
