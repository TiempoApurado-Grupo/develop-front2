
export interface IMessage{
  id ?: number;
  content: string;
  idUserAuthor: number;
  idUserDestination: number;
  read:boolean;
}
