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
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TradeIdUtils} from '../util/trade.id.utils';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {PriceValue} from '../price_common/price.value';
import Decimal from 'decimal.js';
import {PriceCommonUtils} from '../util/price.common.utils';
import {TimeInForce} from './time.in.force';
import {OrderTriggerCondition} from './order.trigger.condition';

@JsonObject('TakeProfitOrder')
export class TakeProfitOrder implements Order {
  @JsonProperty('id', OrderIdJsonConverter, true)
  private id: OrderID = new OrderID('');
  @JsonProperty('type', String, true)
  private type: OrderType = OrderType.TAKE_PROFIT;
  @JsonProperty('createTime', DateTimeJsonConverter, true)
  private createTime: DateTime = new DateTime('');
  @JsonProperty('state', String, true)
  private state: OrderState = OrderState.CANCELLED;
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();
  @JsonProperty('tradeID', TradeIdJsonConverter, true)
  private tradeID: TradeID = new TradeID('');
  @JsonProperty('clientTradeID', TradeIdJsonConverter, true)
  private clientTradeID: TradeID = new TradeID('');
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.GTC;
  @JsonProperty('gtdTime', DateTimeJsonConverter, true)
  private gtdTime: DateTime = new DateTime('');
  @JsonProperty('triggerCondition', String, true)
  private triggerCondition: OrderTriggerCondition =
    OrderTriggerCondition.DEFAULT;

  setId(id: OrderID | string): TakeProfitOrder {
    this.id = OrderUtils.orderIdValue(id);
    return this;
  }

  getId(): OrderID {
    return this.id.copy();
  }

  getType(): OrderType {
    return this.type;
  }

  setCreateTime(createTime: DateTime | string): TakeProfitOrder {
    this.createTime = PrimitiveUtils.dateTimeValue(createTime);
    return this;
  }

  getCreateTime(): DateTime {
    return this.createTime.copy();
  }

  setState(state: OrderState): TakeProfitOrder {
    this.state = state;
    return this;
  }
  getState(): OrderState {
    return this.state;
  }

  setClientExtensions(clientExtensions: ClientExtensions): TakeProfitOrder {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setTradeID(tradeID: TradeID | string): TakeProfitOrder {
    this.tradeID = TradeIdUtils.tradeIdValue(tradeID);
    return this;
  }

  getTradeID(): TradeID {
    return this.tradeID.copy();
  }

  setClientTradeID(clientTradeID: TradeID | string): TakeProfitOrder {
    this.clientTradeID = TradeIdUtils.tradeIdValue(clientTradeID);
    return this;
  }

  getClientTradeID(): TradeID {
    return this.clientTradeID.copy();
  }

  setPrice(averagePrice: PriceValue | Decimal | string): TakeProfitOrder {
    this.price = PriceCommonUtils.priceValue(averagePrice);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setTimeInForce(timeInForce: TimeInForce): TakeProfitOrder {
    this.timeInForce = timeInForce;
    return this;
  }

  getTimeInForce(): TimeInForce {
    return this.timeInForce;
  }

  setGtdTime(gtdTime: DateTime | string): TakeProfitOrder {
    this.gtdTime = PrimitiveUtils.dateTimeValue(gtdTime);
    return this;
  }

  getGtdTime(): DateTime {
    return this.gtdTime.copy();
  }

  setTriggerCondition(
    triggerCondition: OrderTriggerCondition
  ): TakeProfitOrder {
    this.triggerCondition = triggerCondition;
    return this;
  }

  getTriggerCondition(): OrderTriggerCondition {
    return this.triggerCondition;
  }

  copy(): TakeProfitOrder {
    return new TakeProfitOrder()
      .setId(this.id.copy())
      .setCreateTime(this.createTime.copy())
      .setState(this.state)
      .setClientExtensions(this.clientExtensions.copy())
      .setTradeID(this.tradeID.copy())
      .setClientTradeID(this.clientTradeID.copy())
      .setPrice(this.price.copy())
      .setTimeInForce(this.timeInForce)
      .setGtdTime(this.gtdTime.copy())
      .setTriggerCondition(this.triggerCondition);
  }
}
