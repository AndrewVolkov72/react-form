export interface IInput {
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  placeholder?:string;
  autoFocus?:boolean;
  type?:'text' | 'tel' | 'number';
  pattern?:string;
  isError?:boolean;
  required?:boolean;
  errorText?:string;
  helperText?:string;
  correctText?:boolean;
  maxLength?:number;
}