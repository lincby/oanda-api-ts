import {StringPrimitive} from './string.primitive';
import {Decimal} from 'decimal.js';

export class AccountUnits extends StringPrimitive {
  constructor(accountUnits: AccountUnits | Decimal | string) {
    if (accountUnits instanceof AccountUnits) {
      super(accountUnits.getValue());
    } else if (accountUnits instanceof Decimal) {
      super(accountUnits.toString());
    } else {
      super(accountUnits);
    }
  }

  getDecimalValue(): Decimal {
    return new Decimal(super.getValue());
  }

  copy(): AccountUnits {
    return new AccountUnits(super.getValue());
  }
}
