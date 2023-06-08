export interface Lessor {
  id: number;
  profileId: number;
  ranking: number;
  posts: {
    id: number;
    title: string;
    description: string;
    price: number;
    state: string;
    category: string;
    photo: string;
    district: string;
    address: string;
    bedrooms: number;
    bathrooms: string;
    others: string;
    schedule1: string;
    schedule2: string;
  }[];
}
