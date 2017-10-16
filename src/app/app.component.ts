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
  result:{operator:string ,price:number};
  noresult:string;
//injection d'un objet
  constructor(private logicalservice:LogicalService){
    this.operators = this.logicalservice.getOperators();
  }

  printNumber(){
    let n=this.phonenumber.nativeElement.value + "";
    if(this.logicalservice.findMinPriceByPrefix(this.logicalservice.getPrefix(n, this.operators), this.operators).operator!="") {
      this.result = this.logicalservice.findMinPriceByPrefix(this.logicalservice.getPrefix(n, this.operators), this.operators);
      this.noresult=undefined;
    }


    else {
      this.result=undefined;
      this.noresult = "Invalid  or inexistant prefix in the database";
    }

  }
}
