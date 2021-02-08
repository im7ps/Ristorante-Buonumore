import { ElementInterface } from './../interface/interface';

export class Element implements ElementInterface {
 name:string;
  value:number;
  id:number;
  type:string;
  toggle:boolean;

constructor() {
  this.name="";
  this.value=0;
  this.id=0;
  this.type="";
  }
}
