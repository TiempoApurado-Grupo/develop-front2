
export interface IMessage{
  id ?: number;
  content: string;
  idOrigin: number;
  idDestination: number;
  read:boolean;
}
