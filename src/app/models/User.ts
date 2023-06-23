
export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  description: string;
  rankPoints: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.age = 0;
    this.gender = '';
    this.description = '';
    this.rankPoints = 5;
  }

}
