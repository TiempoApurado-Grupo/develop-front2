

export interface IPost {
  id ?: number;
  title: string;
  description: string;
  characteristics: string;
  location: string;
  price: number;
  category: string;
  imageUrls: string[];
  available: boolean;
  author_id: number;
  renter_id: number;
}
