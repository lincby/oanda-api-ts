import {Order} from './order';
import {OrderID} from './order.id';
import {JsonObject, JsonProperty} from 'json2typescript';
import {OrderIdJsonConverter} from '../converter/order/order.id.json.converter';
import {OrderType} from './order.type';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {DateTime} from '../primitives/date.time';
import {OrderUtils} from '../util/order.utils';
import {PrimitiveUtils} from '../util/primitive.utils';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import Decimal from 'decimal.js';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {PriceCommonUtils} from '../util/price.common.utils';
import {TimeInForce} from './time.in.force';
import {OrderPositionFill} from './order.position.fill';
import {OrderTriggerCondition} from './order.trigger.condition';
import {TakeProfitDetails} from '../transaction/take.profit.details';
import {StopLossDetails} from '../transaction/stop.loss.details';
import {GuaranteedStopLossDetails} from '../transaction/guaranteed.stop.loss.details';
import {TrailingStopLossDetails} from '../transaction/trailing.stop.loss.details';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TransactionIdUtils} from '../util/transaction.id.utils';
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TradeIdUtils} from '../util/trade.id.utils';
import {TradeIdArrayJsonConverter} from '../converter/trade/trade.id.array.json.converter';

@JsonObject('StopOrder')
export class StopOrder implements Order {
  @JsonProperty('id', OrderIdJsonConverter, true)
  private id: OrderID = new OrderID('');
  @JsonProperty('type', String, true)
  private type: OrderType = OrderType.STOP;
  @JsonProperty('createTime', DateTimeJsonConverter, true)
  private createTime: DateTime = new DateTime('');
  @JsonProperty('state', String, true)
  private state: OrderState = OrderState.CANCELLED;
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();
  @JsonProperty('instrument', InstrumentNameJsonConverter, true)
  private instrument: InstrumentName = new InstrumentName('');
  @JsonProperty('units', DecimalNumberJsonConverter, true)
  private units: DecimalNumber = new DecimalNumber('');
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('priceBound', PriceValueJsonConverter, true)
  private priceBound: PriceValue = new PriceValue('');
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.GTC;
  @JsonProperty('gtdTime', DateTimeJsonConverter, true)
  private gtdTime: DateTime = new DateTime('');
  @JsonProperty('positionFill', String, true)
  private positionFill: OrderPositionFill = OrderPositionFill.DEFAULT;
  @JsonProperty('triggerCondition', String, true)
  private triggerCondition: OrderTriggerCondition =
    OrderTriggerCondition.DEFAULT;
  @JsonProperty('takeProfitOnFill', TakeProfitDetails, true)
  private takeProfitOnFill: TakeProfitDetails = new TakeProfitDetails();
  @JsonProperty('stopLossOnFill', StopLossDetails, true)
  private stopLossOnFill: StopLossDetails = new StopLossDetails();
  @JsonProperty('guaranteedStopLossOnFill', GuaranteedStopLossDetails, true)
  private guaranteedStopLossOnFill: GuaranteedStopLossDetails = new GuaranteedStopLossDetails();
  @JsonProperty('trailingStopLossOnFill', TrailingStopLossDetails, true)
  private trailingStopLossOnFill: TrailingStopLossDetails = new TrailingStopLossDetails();
  @JsonProperty('tradeClientExtensions', ClientExtensions, true)
  private tradeClientExtensions: ClientExtensions = new ClientExtensions();
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

  setId(id: OrderID | string): StopOrder {
    this.id = OrderUtils.orderIdValue(id);
    return this;
  }

  getId(): OrderID {
    return this.id.copy();
  }

  getType(): OrderType {
    return this.type;
  }

  setCreateTime(createTime: DateTime | string): StopOrder {
    this.createTime = PrimitiveUtils.dateTimeValue(createTime);
    return this;
  }

  getCreateTime(): DateTime {
    return this.createTime.copy();
  }

  setState(state: OrderState): StopOrder {
    this.state = state;
    return this;
  }
  getState(): OrderState {
    return this.state;
  }

  setClientExtensions(clientExtensions: ClientExtensions): StopOrder {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setInstrument(instrument: InstrumentName | string): StopOrder {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrument);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setUnits(units: DecimalNumber | Decimal | string): StopOrder {
    this.units = PrimitiveUtils.decimalNumberValue(units);
    return this;
  }

  getUnits(): DecimalNumber {
    return this.units.copy();
  }

  setPrice(price: PriceValue | Decimal | string): StopOrder {
    this.price = PriceCommonUtils.priceValue(price);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setPriceBound(priceBound: PriceValue | Decimal | string): StopOrder {
    this.priceBound = PriceCommonUtils.priceValue(priceBound);
    return this;
  }

  getPriceBound(): PriceValue {
    return this.priceBound.copy();
  }

  setTimeInForce(timeInForce: TimeInForce): StopOrder {
    this.timeInForce = timeInForce;
    return this;
  }

  getTimeInForce(): TimeInForce {
    return this.timeInForce;
  }

  setGtdTime(gtdTime: DateTime | string): StopOrder {
    this.gtdTime = PrimitiveUtils.dateTimeValue(gtdTime);
    return this;
  }

  getGtdTime(): DateTime {
    return this.gtdTime.copy();
  }

  setPositionFill(positionFill: OrderPositionFill): StopOrder {
    this.positionFill = positionFill;
    return this;
  }

  getPositionFill(): OrderPositionFill {
    return this.positionFill;
  }

  setTriggerCondition(triggerCondition: OrderTriggerCondition): StopOrder {
    this.triggerCondition = triggerCondition;
    return this;
  }

  getTriggerCondition(): OrderTriggerCondition {
    return this.triggerCondition;
  }

  setTakeProfitOnFill(takeProfitOnFill: TakeProfitDetails): StopOrder {
    this.takeProfitOnFill = takeProfitOnFill.copy();
    return this;
  }

  getTakeProfitOnFill(): TakeProfitDetails {
    return this.takeProfitOnFill.copy();
  }

  setStopLossOnFill(stopLossOnFill: StopLossDetails): StopOrder {
    this.stopLossOnFill = stopLossOnFill.copy();
    return this;
  }

  getStopLossOnFill(): StopLossDetails {
    return this.stopLossOnFill.copy();
  }

  setGuaranteedStopLossDetails(
    guaranteedStopLossOnFill: GuaranteedStopLossDetails
  ): StopOrder {
    this.guaranteedStopLossOnFill = guaranteedStopLossOnFill.copy();
    return this;
  }

  getGuaranteedStopLossDetails(): GuaranteedStopLossDetails {
    return this.guaranteedStopLossOnFill.copy();
  }

  setTrailingStopLossOnFill(
    trailingStopLossOnFill: TrailingStopLossDetails
  ): StopOrder {
    this.trailingStopLossOnFill = trailingStopLossOnFill.copy();
    return this;
  }

  getTrailingStopLossOnFill(): TrailingStopLossDetails {
    return this.trailingStopLossOnFill.copy();
  }

  setTradeClientExtensions(tradeClientExtensions: ClientExtensions): StopOrder {
    this.tradeClientExtensions = tradeClientExtensions.copy();
    return this;
  }

  getTradeClientExtensions(): ClientExtensions {
    return this.tradeClientExtensions.copy();
  }

  setFillingTransactionID(
    fillingTransactionID: TransactionID | string
  ): StopOrder {
    this.fillingTransactionID = TransactionIdUtils.transactionIdValue(
      fillingTransactionID
    );
    return this;
  }

  getFillingTransactionID(): TransactionID {
    return this.fillingTransactionID.copy();
  }

  setFilledTime(filledTime: DateTime | string): StopOrder {
    this.filledTime = PrimitiveUtils.dateTimeValue(filledTime);
    return this;
  }

  getFilledTime(): DateTime {
    return this.filledTime.copy();
  }

  setTradeOpenedID(tradeOpenedID: TradeID | string): StopOrder {
    this.tradeOpenedID = TradeIdUtils.tradeIdValue(tradeOpenedID);
    return this;
  }

  getTradeOpenedID(): TradeID {
    return this.tradeOpenedID.copy();
  }

  setTradeReducedID(tradeReducedID: TradeID | string): StopOrder {
    this.tradeReducedID = TradeIdUtils.tradeIdValue(tradeReducedID);
    return this;
  }

  getTradeReducedID(): TradeID {
    return this.tradeReducedID.copy();
  }

  setTradeClosedIDs(tradeClosedIDs: TradeID[] | string[]): StopOrder {
    this.tradeClosedIDs = TradeIdUtils.tradeIdValues(tradeClosedIDs);
    return this;
  }

  getTradeClosedIDs(): TradeID[] {
    const copyOfTradeIDs = new Array<TradeID>();
    this.tradeClosedIDs.forEach(item => copyOfTradeIDs.push(item.copy()));
    return copyOfTradeIDs;
  }

  copy(): StopOrder {
    return new StopOrder()
      .setId(this.id.copy())
      .setCreateTime(this.createTime.copy())
      .setState(this.state)
      .setClientExtensions(this.clientExtensions.copy())
      .setInstrument(this.instrument.copy())
      .setUnits(this.units.copy())
      .setPrice(this.price.copy())
      .setPriceBound(this.priceBound.copy())
      .setTimeInForce(this.timeInForce)
      .setGtdTime(this.gtdTime.copy())
      .setPositionFill(this.positionFill)
      .setTriggerCondition(this.triggerCondition)
      .setTakeProfitOnFill(this.takeProfitOnFill.copy())
      .setStopLossOnFill(this.stopLossOnFill.copy())
      .setGuaranteedStopLossDetails(this.guaranteedStopLossOnFill.copy())
      .setTrailingStopLossOnFill(this.trailingStopLossOnFill.copy())
      .setTradeClientExtensions(this.tradeClientExtensions.copy())
      .setFillingTransactionID(this.fillingTransactionID.copy())
      .setFilledTime(this.filledTime.copy())
      .setTradeOpenedID(this.tradeOpenedID.copy())
      .setTradeReducedID(this.tradeReducedID.copy())
      .setTradeClosedIDs(this.getTradeClosedIDs());
  }
}
