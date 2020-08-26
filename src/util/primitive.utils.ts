import {AccountUnits} from '../primitives/account.units';
import {DateTime} from '../primitives/date.time';
import Decimal from 'decimal.js';

export class PrimitiveUtils {
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
