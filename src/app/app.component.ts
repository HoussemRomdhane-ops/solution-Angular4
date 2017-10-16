import {Component, ViewChild,ElementRef} from '@angular/core';
import {LogicalService} from "./Services/logical.service";
import {Operator} from "./Model/Operator.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogicalService]
})
export class AppComponent {
  operators:Operator[];
  @ViewChild('phonenumber') phonenumber:ElementRef;
  result:number;
  bestoperator:string="";
  noresult:string;
  erreurmessage:string=undefined;
//injection d'un objet
  constructor(private logicalservice:LogicalService){
    this.operators = this.logicalservice.getOperators();
  }

  printNumber(){
    let n=this.phonenumber.nativeElement.value + "";

    if (n.length!=11){
      this.erreurmessage="Please enter a number composed by 11 digits";
      this.result=undefined;
      this.bestoperator ="";
    }

    else {

      this.erreurmessage=undefined;
      if (this.logicalservice.findBestPrice(this.logicalservice.getPrefix(n, this.operators), this.operators) != undefined) {
        this.result = this.logicalservice.findBestPrice(this.logicalservice.getPrefix(n, this.operators), this.operators);
        this.bestoperator = this.logicalservice.getOperatorByPrice(this.logicalservice.getPrefix(n, this.operators), this.operators, this.result)
      }


      else {
        this.result = undefined;
        this.noresult = "Invalid  or inexistant prefix in the database";
      }

    }

  }



}
