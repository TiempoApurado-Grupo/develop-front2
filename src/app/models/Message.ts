
export class Message {
  id: number;
  content: string;
  idOrigin: number;
  idDestination: number;

  constructor() {
    this.id = 0;
    this.content = '';
    this.idOrigin = 0;
    this.idDestination = 0;
  }
}
