import {Prefix} from "./prefix.model";

export class Operator{
  name:string;
  prefixes:Prefix[];

  construtor(name:string,prefixes:Prefix[]){

    this.name = name;
    this.prefixes = prefixes;

  }




}
