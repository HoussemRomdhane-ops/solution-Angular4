import { TestBed, async } from '@angular/core/testing';
import { LogicalService } from './logical.service';
import {Operator} from "../Model/Operator.model";
import {Prefix} from "../Model/prefix.model";

describe('unit-tests', () => {
  it('create an instance', () => {
    let logicalservice:LogicalService = new LogicalService();
    let operators:Operator[]=logicalservice.getOperators();
    expect(logicalservice.getPrefix("465484845454",operators)).toBe(46);
    expect(logicalservice.getPrefix("4673959865",operators)).toBe(4673);
    expect(logicalservice.getPrefix("46732859895",operators)).toBe(46732);
    expect(logicalservice.getPrefix("19856598",operators)).toBe(1);
    expect(logicalservice.findBestPrice(46,operators)).toBe(0.17);
    expect(logicalservice.findBestPrice(46732,operators)).toBe(1.1);
    expect(logicalservice.findBestPrice(44,operators)).toBe(0.5);
    expect(logicalservice.getOperatorByPrice(46732,operators,1.1)).toBe("A");
    expect(logicalservice.getOperatorByPrice(44,operators,0.5)).toBe("B");

  });
});

