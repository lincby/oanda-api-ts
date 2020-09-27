import {JsonObject, JsonProperty} from 'json2typescript';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import Decimal from 'decimal.js';
import {PriceCommonUtils} from '../util/price.common.utils';
import {TimeInForce} from '../order/time.in.force';
import {DateTime} from '../primitives/date.time';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {ClientExtensions} from './client.extensions';

@JsonObject('TakeProfitDetails')
export class TakeProfitDetails {
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.GTC;
  @JsonProperty('gtdTime', DateTimeJsonConverter, true)
  private gtdTime: DateTime = new DateTime('');
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();

  setPrice(averagePrice: PriceValue | Decimal | string): TakeProfitDetails {
    this.price = PriceCommonUtils.priceValue(averagePrice);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setTimeInForce(timeInForce: TimeInForce): TakeProfitDetails {
    this.timeInForce = timeInForce;
    return this;
  }

  getTimeInForce(): TimeInForce {
    return this.timeInForce;
  }

  setGtdTime(gtdTime: DateTime | string): TakeProfitDetails {
    this.gtdTime = PrimitiveUtils.dateTimeValue(gtdTime);
    return this;
  }

  getGtdTime(): DateTime {
    return this.gtdTime.copy();
  }

  setClientExtensions(clientExtensions: ClientExtensions): TakeProfitDetails {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  copy(): TakeProfitDetails {
    return new TakeProfitDetails()
      .setPrice(this.price.copy())
      .setTimeInForce(this.timeInForce)
      .setGtdTime(this.gtdTime.copy())
      .setClientExtensions(this.clientExtensions.copy());
  }
}
