import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {Currency} from '../../primitives/currency';

@JsonConverter
export class CurrencyJsonConverter implements JsonCustomConvert<Currency> {
  serialize(currency: Currency): string {
    return currency.getValue();
  }

  deserialize(currency: string): Currency {
    return new Currency(currency);
  }
}
