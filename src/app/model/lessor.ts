export interface Lessor {
  id: number;
  profileId: number;
  posts: {
    id: number;
    title: string;
    description: string;
    price: number;
    state: string;
    category: string;
    ranking: number;
    photo: string;
    characteristics: {
      bedrooms: number;
      bathrooms: string;
      others: string;
    };
    visitSchedules: {
      id: number;
      schedule: string;
    };
    location: {
      district: string;
      address: string;
    };
  }[];
}
