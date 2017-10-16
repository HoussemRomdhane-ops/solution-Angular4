import {Operator} from "../Model/Operator.model";
import {Prefix} from "../Model/prefix.model";


export class LogicalService {

  operators:Operator[]=[];




   getPrefix(phonenumber:string,operators:Operator[]){
    let maxlength=0;
    let prefix:number;
        for(let i=0;i<operators.length;i++)
          for(let j=0; j<operators[i].prefixes.length;j++){
              let s=operators[i].prefixes[j].prefix_number+'';
              if(phonenumber.substr(0,s.length)== s && maxlength<=s.length){
                maxlength=s.length;
                prefix=operators[i].prefixes[j].prefix_number;
              }

          }
     return prefix;

   }


  findBestPrice(prefix:number,operators:Operator[]){

    let minprice:number= undefined;
    minprice = undefined;

    for (let i=0;i<operators.length;i++)
    {

      for(let j=0;j<operators[i].prefixes.length;j++)
      {
        if(operators[i].prefixes[j].prefix_number == prefix ){

          if(minprice==undefined){
            minprice=operators[i].prefixes[j].price;


          }
          else if( operators[i].prefixes[j].price<minprice) {

            minprice = operators[i].prefixes[j].price;

          }
          break;
        }

      }


    }

    return minprice ;

  }


  getOperatorByPrice(prefix:number,operators:Operator[],price:number) {

    for (let i = 0; i < operators.length; i++) {

      for (let j = 0; j < operators[i].prefixes.length; j++) {

        if(operators[i].prefixes[j].prefix_number == prefix && operators[i].prefixes[j].price == price  ){


            return operators[i].name;
        }


      }


    }

    return "no operator founded";

  }









  getOperators(){
    let prefixs:Prefix[]=[];
    let prefix =new Prefix();
    prefix.prefix_number=1;
    prefix.price =0.9;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=268;
    prefix.price =5.1;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=46;
    prefix.price =0.17;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=4620;
    prefix.price =0.0;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=468;
    prefix.price =0.15;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=4631;
    prefix.price =0.15;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=4673;
    prefix.price =0.9;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=46732;
    prefix.price =1.1;
    prefixs.push(prefix);
    let operator =new Operator();
    operator.name="A";
    operator.prefixes=prefixs;
    this.operators.push(operator);

    prefixs=new Array();
    prefix =new Prefix();
    prefix.prefix_number=1;
    prefix.price =0.92;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=44;
    prefix.price =0.5;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=46;
    prefix.price =0.2;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=467;
    prefix.price =1.0;
    prefixs.push(prefix);
    prefix =new Prefix();
    prefix.prefix_number=48;
    prefix.price =1.2;
    prefixs.push(prefix);
    operator =new Operator();
    operator.name="B";
    operator.prefixes=prefixs;
    this.operators.push(operator);

    return this.operators.slice();
  }


}
