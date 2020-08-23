import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {DecimalNumber} from '../primitives/decimal.number';

@JsonConverter
export class DecimalNumberJsonConverter
  implements JsonCustomConvert<DecimalNumber> {
  serialize(decimalNumber: DecimalNumber): string {
    return decimalNumber.getValue();
  }

  deserialize(decimalNumber: string): DecimalNumber {
    return new DecimalNumber(decimalNumber);
  }
}
