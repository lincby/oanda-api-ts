import {AccountUnits} from '../primitives/account.units';
import {DateTime} from '../primitives/date.time';
import Decimal from 'decimal.js';
import {DecimalNumber} from '../primitives/decimal.number';
import {InstrumentName} from '../primitives/instrument.name';

export class PrimitiveUtils {
  static instrumentNameValue = (
    src: InstrumentName | string
  ): InstrumentName => {
    if (src instanceof InstrumentName) {
      return src.copy();
    }
    return new InstrumentName(src);
  };

  static decimalNumberValue = (
    src: DecimalNumber | Decimal | string
  ): DecimalNumber => {
    if (src instanceof DecimalNumber) {
      return src.copy();
    } else if (src instanceof Decimal) {
      return new DecimalNumber(src);
    }
    return new DecimalNumber(src);
  };

  static dateTimeValue = (src: DateTime | string): DateTime => {
    if (src instanceof DateTime) {
      return src.copy();
    }
    return new DateTime(src);
  };

  static accountUnitValue = (
    src: AccountUnits | Decimal | string
  ): AccountUnits => {
    if (src instanceof AccountUnits) {
      return src.copy();
    } else if (src instanceof Decimal) {
      return new AccountUnits(src);
    }
    return new AccountUnits(src);
  };
}
