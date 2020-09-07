import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {PriceValue} from '../../price_common/price.value';

@JsonConverter
export class PriceValueJsonConverter implements JsonCustomConvert<PriceValue> {
  serialize(priceValue: PriceValue): string {
    return priceValue.getValue();
  }

  deserialize(priceValue: string): PriceValue {
    return new PriceValue(priceValue);
  }
}
