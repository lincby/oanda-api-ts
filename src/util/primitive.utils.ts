import {AccountUnits} from '../primitives/account.units';
import {DateTime} from '../primitives/date.time';
import Decimal from 'decimal.js';
import {DecimalNumber} from '../primitives/decimal.number';

export class PrimitiveUtils {
  static decimalNumberValue = (
    src: DecimalNumber | Decimal | string
  ): DecimalNumber => {
    if (src instanceof DecimalNumber) {
      return src.copy();
    } else if (src instanceof Decimal) {
      return new DecimalNumber(src);
    } else {
      return new DecimalNumber(src);
    }
  };

  static dateTimeValue = (src: DateTime | string) => {
    if (src instanceof DateTime) {
      return src.copy();
    } else {
      return new DateTime(src);
    }
  };

  static accountUnitValue = (
    src: AccountUnits | Decimal | string
  ): AccountUnits => {
    if (src instanceof AccountUnits) {
      return src.copy();
    } else if (src instanceof Decimal) {
      return new AccountUnits(src);
    } else {
      return new AccountUnits(src);
    }
  };
}
