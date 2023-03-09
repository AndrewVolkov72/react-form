export interface IAlert {
  text:string;
  onClose:()=>void;
  autoHideDirection?:number;
}