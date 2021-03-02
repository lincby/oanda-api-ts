import {JsonObject, JsonProperty} from 'json2typescript';
import {Order} from './order';
import {OrderID} from './order.id';
import {OrderIdJsonConverter} from '../converter/order/order.id.json.converter';
import {OrderType} from './order.type';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {DateTime} from '../primitives/date.time';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {OrderUtils} from '../util/order.utils';
import {PrimitiveUtils} from '../util/primitive.utils';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TradeID} from '../trade/trade.id';
import {TradeIdUtils} from '../util/trade.id.utils';
import {ClientID} from '../transaction/client.id';
import {ClientIdUtils} from '../util/client.id.utils';
import {ClientIdJsonConverter} from '../converter/transaction/client.id.json.converter';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {PriceValue} from '../price_common/price.value';
import Decimal from 'decimal.js';
import {PriceCommonUtils} from '../util/price.common.utils';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import {DecimalNumber} from '../primitives/decimal.number';

@JsonObject('StopLossOrder')
export class StopLossOrder implements Order {
  @JsonProperty('id', OrderIdJsonConverter, true)
  private id: OrderID = new OrderID('');
  @JsonProperty('type', String, true)
  private type: OrderType = OrderType.STOP_LOSS;
  @JsonProperty('createTime', DateTimeJsonConverter, true)
  private createTime: DateTime = new DateTime('');
  @JsonProperty('state', String, true)
  private state: OrderState = OrderState.CANCELLED;
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();
  @JsonProperty('tradeID', TradeIdJsonConverter, true)
  private tradeID: TradeID = new TradeID('');
  @JsonProperty('clientTradeID', ClientIdJsonConverter, true)
  private clientTradeID: ClientID = new ClientID('');
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('distance', DecimalNumberJsonConverter, true)
  private distance: DecimalNumber = new DecimalNumber('');

  setId(id: OrderID | string): StopLossOrder {
    this.id = OrderUtils.orderIdValue(id);
    return this;
  }

  getId(): OrderID {
    return this.id.copy();
  }

  getType(): OrderType {
    return this.type;
  }

  setCreateTime(createTime: DateTime | string): StopLossOrder {
    this.createTime = PrimitiveUtils.dateTimeValue(createTime);
    return this;
  }

  getCreateTime(): DateTime {
    return this.createTime.copy();
  }

  setState(state: OrderState): StopLossOrder {
    this.state = state;
    return this;
  }

  getState(): OrderState {
    return this.state;
  }

  setClientExtensions(clientExtensions: ClientExtensions): StopLossOrder {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setTradeID(tradeID: TradeID | string): StopLossOrder {
    this.tradeID = TradeIdUtils.tradeIdValue(tradeID);
    return this;
  }

  getTradeID(): TradeID {
    return this.tradeID.copy();
  }

  setClientTradeID(clientTradeID: ClientID | string): StopLossOrder {
    this.clientTradeID = ClientIdUtils.clientIdValue(clientTradeID);
    return this;
  }

  getClientTradeID(): ClientID {
    return this.clientTradeID.copy();
  }

  setPrice(averagePrice: PriceValue | Decimal | string): StopLossOrder {
    this.price = PriceCommonUtils.priceValue(averagePrice);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setDistance(distance: DecimalNumber | Decimal | string): StopLossOrder {
    this.distance = PrimitiveUtils.decimalNumberValue(distance);
    return this;
  }

  getDistance(): DecimalNumber {
    return this.distance.copy();
  }

  copy(): StopLossOrder {
    return new StopLossOrder()
      .setId(this.id.copy())
      .setCreateTime(this.createTime.copy())
      .setState(this.state)
      .setClientExtensions(this.clientExtensions.copy())
      .setTradeID(this.tradeID.copy())
      .setClientTradeID(this.clientTradeID.copy())
      .setPrice(this.price.copy())
      .setDistance(this.distance.copy());
  }
}
