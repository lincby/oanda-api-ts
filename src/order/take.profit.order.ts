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
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdUtils} from '../util/transaction.id.utils';
import {TradeIdArrayJsonConverter} from '../converter/trade/trade.id.array.json.converter';
import {ClientID} from '../transaction/client.id';
import {ClientIdJsonConverter} from '../converter/transaction/client.id.json.converter';
import {ClientIdUtils} from '../util/client.id.utils';

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
  @JsonProperty('clientTradeID', ClientIdJsonConverter, true)
  private clientTradeID: ClientID = new ClientID('');
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.GTC;
  @JsonProperty('gtdTime', DateTimeJsonConverter, true)
  private gtdTime: DateTime = new DateTime('');
  @JsonProperty('triggerCondition', String, true)
  private triggerCondition: OrderTriggerCondition =
    OrderTriggerCondition.DEFAULT;
  @JsonProperty('fillingTransactionID', TransactionIdJsonConverter, true)
  private fillingTransactionID: TransactionID = new TransactionID('');
  @JsonProperty('filledTime', DateTimeJsonConverter, true)
  private filledTime: DateTime = new DateTime('');
  @JsonProperty('tradeOpenedID', TradeIdJsonConverter, true)
  private tradeOpenedID: TradeID = new TradeID('');
  @JsonProperty('tradeReducedID', TradeIdJsonConverter, true)
  private tradeReducedID: TradeID = new TradeID('');
  @JsonProperty('tradeClosedIDs', TradeIdArrayJsonConverter, true)
  private tradeClosedIDs: TradeID[] = new Array<TradeID>();
  @JsonProperty('cancellingTransactionID', TransactionIdJsonConverter, true)
  private cancellingTransactionID: TransactionID = new TransactionID('');
  @JsonProperty('cancelledTime', DateTimeJsonConverter, true)
  private cancelledTime: DateTime = new DateTime('');
  @JsonProperty('replacesOrderID', OrderIdJsonConverter, true)
  private replacesOrderID: OrderID = new OrderID('');
  @JsonProperty('replacedByOrderID', OrderIdJsonConverter, true)
  private replacedByOrderID: OrderID = new OrderID('');

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

  setClientTradeID(clientTradeID: ClientID | string): TakeProfitOrder {
    this.clientTradeID = ClientIdUtils.clientIdValue(clientTradeID);
    return this;
  }

  getClientTradeID(): ClientID {
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

  setFillingTransactionID(
    fillingTransactionID: TransactionID | string
  ): TakeProfitOrder {
    this.fillingTransactionID = TransactionIdUtils.transactionIdValue(
      fillingTransactionID
    );
    return this;
  }

  getFillingTransactionID(): TransactionID {
    return this.fillingTransactionID.copy();
  }

  setFilledTime(filledTime: DateTime | string): TakeProfitOrder {
    this.filledTime = PrimitiveUtils.dateTimeValue(filledTime);
    return this;
  }

  getFilledTime(): DateTime {
    return this.filledTime.copy();
  }

  setTradeOpenedID(tradeOpenedID: TradeID | string): TakeProfitOrder {
    this.tradeOpenedID = TradeIdUtils.tradeIdValue(tradeOpenedID);
    return this;
  }

  getTradeOpenedID(): TradeID {
    return this.tradeOpenedID.copy();
  }

  setTradeReducedID(tradeReducedID: TradeID | string): TakeProfitOrder {
    this.tradeReducedID = TradeIdUtils.tradeIdValue(tradeReducedID);
    return this;
  }

  getTradeReducedID(): TradeID {
    return this.tradeReducedID.copy();
  }

  setTradeClosedIDs(tradeClosedIDs: TradeID[] | string[]): TakeProfitOrder {
    this.tradeClosedIDs = TradeIdUtils.tradeIdValues(tradeClosedIDs);
    return this;
  }

  getTradeClosedIDs(): TradeID[] {
    const copyOfTradeIDs = new Array<TradeID>();
    this.tradeClosedIDs.forEach(item => copyOfTradeIDs.push(item.copy()));
    return copyOfTradeIDs;
  }

  setCancellingTransactionID(
    cancellingTransactionID: TransactionID | string
  ): TakeProfitOrder {
    this.cancellingTransactionID = TransactionIdUtils.transactionIdValue(
      cancellingTransactionID
    );
    return this;
  }

  getCancellingTransactionID(): TransactionID {
    return this.cancellingTransactionID.copy();
  }

  setCancelledTime(cancelledTime: DateTime | string): TakeProfitOrder {
    this.cancelledTime = PrimitiveUtils.dateTimeValue(cancelledTime);
    return this;
  }

  getCancelledTime(): DateTime {
    return this.cancelledTime.copy();
  }

  setReplacesOrderID(replacesOrderID: OrderID | string): TakeProfitOrder {
    this.replacesOrderID = OrderUtils.orderIdValue(replacesOrderID);
    return this;
  }

  getReplacesOrderID(): OrderID {
    return this.replacesOrderID.copy();
  }

  setReplacedByOrderID(replacedByOrderID: OrderID | string): TakeProfitOrder {
    this.replacedByOrderID = OrderUtils.orderIdValue(replacedByOrderID);
    return this;
  }

  getReplacedByOrderID(): OrderID {
    return this.replacedByOrderID.copy();
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
      .setTriggerCondition(this.triggerCondition)
      .setFillingTransactionID(this.fillingTransactionID.copy())
      .setFilledTime(this.filledTime.copy())
      .setTradeOpenedID(this.tradeOpenedID.copy())
      .setTradeReducedID(this.tradeReducedID.copy())
      .setTradeClosedIDs(this.getTradeClosedIDs())
      .setCancellingTransactionID(this.cancellingTransactionID.copy())
      .setCancelledTime(this.cancelledTime.copy())
      .setReplacesOrderID(this.replacesOrderID.copy())
      .setReplacedByOrderID(this.replacedByOrderID.copy());
  }
}
