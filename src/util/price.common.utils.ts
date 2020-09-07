import Decimal from 'decimal.js';
import {PriceValue} from '../price_common/price.value';

export class PriceCommonUtils {
  static priceValue = (src: PriceValue | Decimal | string): PriceValue => {
    if (src instanceof PriceValue) {
      return src.copy();
    } else if (src instanceof Decimal) {
      return new PriceValue(src);
    }
    return new PriceValue(src);
  };
}
