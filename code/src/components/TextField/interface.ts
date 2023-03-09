export interface ITextField {
  value:string;
  onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
  placeholder?:string;
  autoFocus?:boolean;
  helperText?:string;
  isError?:boolean;
  required?:boolean;
  errorText?:string;
  correctText?:boolean;
}