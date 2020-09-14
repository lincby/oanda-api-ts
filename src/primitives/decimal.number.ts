import {StringPrimitive} from './string.primitive';
import Decimal from 'decimal.js';

export class DecimalNumber extends StringPrimitive {
  constructor(decimalNumber: DecimalNumber | Decimal | string) {
    if (decimalNumber instanceof DecimalNumber) {
      super(decimalNumber.getValue());
    } else if (decimalNumber instanceof Decimal) {
      super(decimalNumber.toString());
    } else {
      super(decimalNumber);
    }
  }

  getDecimalValue(): Decimal {
    return new Decimal(super.getValue());
  }

  copy(): DecimalNumber {
    return new DecimalNumber(super.getValue());
  }
}
