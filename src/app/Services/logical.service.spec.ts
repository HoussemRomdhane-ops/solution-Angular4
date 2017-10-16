import { TestBed, async } from '@angular/core/testing';
import { LogicalService } from './logical.service';
import {Operator} from "../Model/Operator.model";
import {Prefix} from "../Model/prefix.model";

describe('unit-tests', () => {
  it('create an instance', () => {
    let logicalservice:LogicalService = new LogicalService();
    let operators:Operator[]=logicalservice.getOperators();
    let result:{operator:string , price:number} =logicalservice.findMinPriceByPrefix(46,operators);
    expect(logicalservice.getPrefix("465484845454",operators)).toBe(46);
    expect(logicalservice.getPrefix("4673959865",operators)).toBe(4673);
    expect(logicalservice.getPrefix("46732859895",operators)).toBe(46732);
    expect(logicalservice.getPrefix("19856598",operators)).toBe(1);


  });
});

