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
import {TimeInForce} from './time.in.force';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import {PriceCommonUtils} from '../util/price.common.utils';
import {OrderPositionFill} from './order.position.fill';
import {MarketOrderTradeClose} from '../transaction/market.order.trade.close';
import {MarketOrderPositionCloseout} from '../transaction/market.order.position.closeout';
import {MarketOrderMarginCloseout} from '../transaction/market.order.margin.closeout';
import {MarketOrderDelayedTradeClose} from '../transaction/market.order.delayed.trade.close';
import {TakeProfitDetails} from '../transaction/take.profit.details';
import {StopLossDetails} from '../transaction/stop.loss.details';
import {GuaranteedStopLossDetails} from '../transaction/guaranteed.stop.loss.details';
import {TrailingStopLossDetails} from '../transaction/trailing.stop.loss.details';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TradeIdArrayJsonConverter} from '../converter/trade/trade.id.array.json.converter';
import {TradeIdUtils} from '../util/trade.id.utils';
import {TransactionIdUtils} from '../util/transaction.id.utils';

@JsonObject('MarketOrder')
export class MarketOrder implements Order {
  @JsonProperty('id', OrderIdJsonConverter, true)
  private id: OrderID = new OrderID('');
  @JsonProperty('type', String, true)
  private type: OrderType = OrderType.MARKET;
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
  @JsonProperty('timeInForce', String, true)
  private timeInForce: TimeInForce = TimeInForce.FOK;
  @JsonProperty('priceBound', PriceValueJsonConverter, true)
  private priceBound: PriceValue = new PriceValue('');
  @JsonProperty('positionFill', String, true)
  private positionFill: OrderPositionFill = OrderPositionFill.DEFAULT;
  @JsonProperty('tradeClose', MarketOrderTradeClose, true)
  private tradeClose: MarketOrderTradeClose = new MarketOrderTradeClose();
  @JsonProperty('longPositionCloseout', MarketOrderPositionCloseout, true)
  private longPositionCloseout: MarketOrderPositionCloseout = new MarketOrderPositionCloseout();
  @JsonProperty('shortPositionCloseout', MarketOrderPositionCloseout, true)
  private shortPositionCloseout: MarketOrderPositionCloseout = new MarketOrderPositionCloseout();
  @JsonProperty('marginCloseout', MarketOrderMarginCloseout, true)
  private marginCloseout: MarketOrderMarginCloseout = new MarketOrderMarginCloseout();
  @JsonProperty('delayedTradeClose', MarketOrderDelayedTradeClose, true)
  private delayedTradeClose: MarketOrderDelayedTradeClose = new MarketOrderDelayedTradeClose();
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
  @JsonProperty('cancellingTransactionID', TransactionIdJsonConverter, true)
  private cancellingTransactionID: TransactionID = new TransactionID('');
  @JsonProperty('cancelledTime', DateTimeJsonConverter, true)
  private cancelledTime: DateTime = new DateTime('');

  setId(id: OrderID | string): MarketOrder {
    this.id = OrderUtils.orderIdValue(id);
    return this;
  }

  getId(): OrderID {
    return this.id.copy();
  }

  getType(): OrderType {
    return this.type;
  }

  setCreateTime(createTime: DateTime | string): MarketOrder {
    this.createTime = PrimitiveUtils.dateTimeValue(createTime);
    return this;
  }

  getCreateTime(): DateTime {
    return this.createTime.copy();
  }

  setState(state: OrderState): MarketOrder {
    this.state = state;
    return this;
  }
  getState(): OrderState {
    return this.state;
  }

  setClientExtensions(clientExtensions: ClientExtensions): MarketOrder {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setInstrument(instrument: InstrumentName | string): MarketOrder {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrument);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setUnits(units: DecimalNumber | Decimal | string): MarketOrder {
    this.units = PrimitiveUtils.decimalNumberValue(units);
    return this;
  }

  getUnits(): DecimalNumber {
    return this.units.copy();
  }

  setTimeInForce(timeInForce: TimeInForce): MarketOrder {
    this.timeInForce = timeInForce;
    return this;
  }

  getTimeInForce(): TimeInForce {
    return this.timeInForce;
  }

  setPriceBound(priceBound: PriceValue | Decimal | string): MarketOrder {
    this.priceBound = PriceCommonUtils.priceValue(priceBound);
    return this;
  }

  getPriceBound(): PriceValue {
    return this.priceBound.copy();
  }

  setPositionFill(positionFill: OrderPositionFill): MarketOrder {
    this.positionFill = positionFill;
    return this;
  }

  getPositionFill(): OrderPositionFill {
    return this.positionFill;
  }

  setTradeClose(tradeClose: MarketOrderTradeClose): MarketOrder {
    this.tradeClose = tradeClose.copy();
    return this;
  }

  getTradeClose(): MarketOrderTradeClose {
    return this.tradeClose.copy();
  }

  setLongPositionCloseout(
    longPositionCloseout: MarketOrderPositionCloseout
  ): MarketOrder {
    this.longPositionCloseout = longPositionCloseout.copy();
    return this;
  }

  getLongPositionCloseout(): MarketOrderPositionCloseout {
    return this.longPositionCloseout.copy();
  }

  setShortPositionCloseout(
    shortPositionCloseout: MarketOrderPositionCloseout
  ): MarketOrder {
    this.shortPositionCloseout = shortPositionCloseout.copy();
    return this;
  }

  getShortPositionCloseout(): MarketOrderPositionCloseout {
    return this.shortPositionCloseout.copy();
  }

  setMarginCloseout(marginCloseout: MarketOrderMarginCloseout): MarketOrder {
    this.marginCloseout = marginCloseout;
    return this;
  }

  getMarginCloseout(): MarketOrderMarginCloseout {
    return this.marginCloseout;
  }

  setDelayedTradeClose(
    delayedTradeClose: MarketOrderDelayedTradeClose
  ): MarketOrder {
    this.delayedTradeClose = delayedTradeClose;
    return this;
  }

  getDelayedTradeClose(): MarketOrderDelayedTradeClose {
    return this.delayedTradeClose;
  }

  setTakeProfitOnFill(takeProfitOnFill: TakeProfitDetails): MarketOrder {
    this.takeProfitOnFill = takeProfitOnFill.copy();
    return this;
  }

  getTakeProfitOnFill(): TakeProfitDetails {
    return this.takeProfitOnFill.copy();
  }

  setStopLossOnFill(stopLossOnFill: StopLossDetails): MarketOrder {
    this.stopLossOnFill = stopLossOnFill.copy();
    return this;
  }

  getStopLossOnFill(): StopLossDetails {
    return this.stopLossOnFill.copy();
  }

  setGuaranteedStopLossDetails(
    guaranteedStopLossOnFill: GuaranteedStopLossDetails
  ): MarketOrder {
    this.guaranteedStopLossOnFill = guaranteedStopLossOnFill.copy();
    return this;
  }

  getGuaranteedStopLossDetails(): GuaranteedStopLossDetails {
    return this.guaranteedStopLossOnFill.copy();
  }

  setTrailingStopLossOnFill(
    trailingStopLossOnFill: TrailingStopLossDetails
  ): MarketOrder {
    this.trailingStopLossOnFill = trailingStopLossOnFill.copy();
    return this;
  }

  getTrailingStopLossOnFill(): TrailingStopLossDetails {
    return this.trailingStopLossOnFill.copy();
  }

  setTradeClientExtensions(
    tradeClientExtensions: ClientExtensions
  ): MarketOrder {
    this.tradeClientExtensions = tradeClientExtensions.copy();
    return this;
  }

  getTradeClientExtensions(): ClientExtensions {
    return this.tradeClientExtensions.copy();
  }

  setFillingTransactionID(
    fillingTransactionID: TransactionID | string
  ): MarketOrder {
    this.fillingTransactionID = TransactionIdUtils.transactionIdValue(
      fillingTransactionID
    );
    return this;
  }

  getFillingTransactionID(): TransactionID {
    return this.fillingTransactionID.copy();
  }

  setFilledTime(filledTime: DateTime | string): MarketOrder {
    this.filledTime = PrimitiveUtils.dateTimeValue(filledTime);
    return this;
  }

  getFilledTime(): DateTime {
    return this.filledTime.copy();
  }

  setTradeOpenedID(tradeOpenedID: TradeID | string): MarketOrder {
    this.tradeOpenedID = TradeIdUtils.tradeIdValue(tradeOpenedID);
    return this;
  }

  getTradeOpenedID(): TradeID {
    return this.tradeOpenedID.copy();
  }

  setTradeReducedID(tradeReducedID: TradeID | string): MarketOrder {
    this.tradeReducedID = TradeIdUtils.tradeIdValue(tradeReducedID);
    return this;
  }

  getTradeReducedID(): TradeID {
    return this.tradeReducedID.copy();
  }

  setTradeClosedIDs(tradeClosedIDs: TradeID[] | string[]): MarketOrder {
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
  ): MarketOrder {
    this.cancellingTransactionID = TransactionIdUtils.transactionIdValue(
      cancellingTransactionID
    );
    return this;
  }

  getCancellingTransactionID(): TransactionID {
    return this.cancellingTransactionID.copy();
  }

  setCancelledTime(cancelledTime: DateTime | string): MarketOrder {
    this.cancelledTime = PrimitiveUtils.dateTimeValue(cancelledTime);
    return this;
  }

  getCancelledTime(): DateTime {
    return this.cancelledTime.copy();
  }

  copy(): MarketOrder {
    return new MarketOrder()
      .setId(this.id.copy())
      .setCreateTime(this.createTime.copy())
      .setState(this.state)
      .setClientExtensions(this.clientExtensions.copy())
      .setInstrument(this.instrument.copy())
      .setUnits(this.units.copy())
      .setTimeInForce(this.timeInForce)
      .setPriceBound(this.priceBound.copy())
      .setPositionFill(this.positionFill)
      .setTradeClose(this.tradeClose.copy())
      .setLongPositionCloseout(this.longPositionCloseout.copy())
      .setShortPositionCloseout(this.shortPositionCloseout.copy())
      .setMarginCloseout(this.marginCloseout.copy())
      .setDelayedTradeClose(this.delayedTradeClose.copy())
      .setTakeProfitOnFill(this.takeProfitOnFill.copy())
      .setStopLossOnFill(this.stopLossOnFill.copy())
      .setGuaranteedStopLossDetails(this.guaranteedStopLossOnFill.copy())
      .setTrailingStopLossOnFill(this.trailingStopLossOnFill.copy())
      .setTradeClientExtensions(this.tradeClientExtensions.copy())
      .setFillingTransactionID(this.fillingTransactionID.copy())
      .setFilledTime(this.filledTime.copy())
      .setTradeOpenedID(this.tradeOpenedID.copy())
      .setTradeReducedID(this.tradeReducedID.copy())
      .setTradeClosedIDs(this.getTradeClosedIDs())
      .setCancellingTransactionID(this.cancellingTransactionID.copy())
      .setCancelledTime(this.cancelledTime.copy());
  }
}
