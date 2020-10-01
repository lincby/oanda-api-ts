import {JsonObject, JsonProperty} from 'json2typescript';
import Decimal from 'decimal.js';
import {PriceValue} from '../price_common/price.value';
import {PriceCommonUtils} from '../util/price.common.utils';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {TimeInForce} from '../order/time.in.force';
import {DateTime} from '../primitives/date.time';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {ClientExtensions} from './client.extensions';

@JsonObject('StopLossDetails')
export class StopLossDetails {
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('distance', DecimalNumberJsonConverter, true)
  private distance: DecimalNumber = new DecimalNumber('');
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.GTC;
  @JsonProperty('gtdTime', DateTimeJsonConverter, true)
  private gtdTime: DateTime = new DateTime('');
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();

  setPrice(averagePrice: PriceValue | Decimal | string): StopLossDetails {
    this.price = PriceCommonUtils.priceValue(averagePrice);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setDistance(distance: DecimalNumber | Decimal | string): StopLossDetails {
    this.distance = PrimitiveUtils.decimalNumberValue(distance);
    return this;
  }

  getDistance(): DecimalNumber {
    return this.distance.copy();
  }

  setTimeInForce(timeInForce: TimeInForce): StopLossDetails {
    this.timeInForce = timeInForce;
    return this;
  }

  getTimeInForce(): TimeInForce {
    return this.timeInForce;
  }

  setGtdTime(gtdTime: DateTime | string): StopLossDetails {
    this.gtdTime = PrimitiveUtils.dateTimeValue(gtdTime);
    return this;
  }

  getGtdTime(): DateTime {
    return this.gtdTime.copy();
  }

  setClientExtensions(clientExtensions: ClientExtensions): StopLossDetails {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  copy(): StopLossDetails {
    return new StopLossDetails()
      .setPrice(this.price.copy())
      .setDistance(this.distance.copy())
      .setTimeInForce(this.timeInForce)
      .setGtdTime(this.gtdTime.copy())
      .setClientExtensions(this.clientExtensions.copy());
  }
}
