import {StringPrimitive} from '../primitives/string.primitive';
import Decimal from 'decimal.js';

export class PriceValue extends StringPrimitive {
  constructor(priceValue: PriceValue | Decimal | string) {
    if (priceValue instanceof PriceValue) {
      super(priceValue.getValue());
    } else if (priceValue instanceof Decimal) {
      super(priceValue.toString());
    } else {
      super(priceValue);
    }
  }

  getDecimalValue(): Decimal {
    return new Decimal(super.getValue());
  }

  copy(): PriceValue {
    return new PriceValue(super.getValue());
  }
}
