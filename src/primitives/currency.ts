import {StringPrimitive} from './string.primitive';

export class Currency extends StringPrimitive {
  constructor(currency: Currency);
  constructor(currency: string);
  constructor(currency: Currency | string) {
    if (currency instanceof Currency) {
      super(currency.getValue());
    } else {
      super(currency);
    }
  }

  copy(): Currency {
    return new Currency(super.getValue());
  }
}
