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
import {OrderPositionFill} from '../order/order.position.fill';
import {PriceCommonUtils} from '../util/price.common.utils';
import {StopLossDetails} from '../transaction/stop.loss.details';
import {TakeProfitDetails} from '../transaction/take.profit.details';
import {GuaranteedStopLossDetails} from '../transaction/guaranteed.stop.loss.details';
import {TrailingStopLossDetails} from '../transaction/trailing.stop.loss.details';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TransactionIdUtils} from '../util/transaction.id.utils';
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TradeIdUtils} from '../util/trade.id.utils';
import {TradeIdArrayJsonConverter} from '../converter/trade/trade.id.array.json.converter';

@JsonObject('FixedPriceOrder')
export class FixedPriceOrder implements Order {
  @JsonProperty('id', OrderIdJsonConverter, true)
  private id: OrderID = new OrderID('');
  @JsonProperty('type', String, true)
  private type: OrderType = OrderType.FIXED_PRICE;
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
  @JsonProperty('positionFill', String, true)
  private positionFill: OrderPositionFill = OrderPositionFill.DEFAULT;
  @JsonProperty('tradeState', String, true)
  private tradeState = '';
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

  setId(id: OrderID | string): FixedPriceOrder {
    this.id = OrderUtils.orderIdValue(id);
    return this;
  }

  getId(): OrderID {
    return this.id.copy();
  }

  getType(): OrderType {
    return this.type;
  }

  setCreateTime(createTime: DateTime | string): FixedPriceOrder {
    this.createTime = PrimitiveUtils.dateTimeValue(createTime);
    return this;
  }

  getCreateTime(): DateTime {
    return this.createTime.copy();
  }

  setState(state: OrderState): FixedPriceOrder {
    this.state = state;
    return this;
  }
  getState(): OrderState {
    return this.state;
  }

  setClientExtensions(clientExtensions: ClientExtensions): FixedPriceOrder {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setInstrument(instrumentName: InstrumentName | string): FixedPriceOrder {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrumentName);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setUnits(units: DecimalNumber | Decimal | string): FixedPriceOrder {
    this.units = PrimitiveUtils.decimalNumberValue(units);
    return this;
  }

  getUnits(): DecimalNumber {
    return this.units.copy();
  }

  setPrice(priceBound: PriceValue | Decimal | string): FixedPriceOrder {
    this.price = PriceCommonUtils.priceValue(priceBound);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setPositionFill(positionFill: OrderPositionFill): FixedPriceOrder {
    this.positionFill = positionFill;
    return this;
  }

  getPositionFill(): OrderPositionFill {
    return this.positionFill;
  }

  setTradeState(tradeState: string): FixedPriceOrder {
    this.tradeState = tradeState;
    return this;
  }

  getTradeState(): string {
    return this.tradeState;
  }

  setTakeProfitOnFill(takeProfitOnFill: TakeProfitDetails): FixedPriceOrder {
    this.takeProfitOnFill = takeProfitOnFill.copy();
    return this;
  }

  getTakeProfitOnFill(): TakeProfitDetails {
    return this.takeProfitOnFill.copy();
  }

  setStopLossOnFill(stopLossOnFill: StopLossDetails): FixedPriceOrder {
    this.stopLossOnFill = stopLossOnFill.copy();
    return this;
  }

  getStopLossOnFill(): StopLossDetails {
    return this.stopLossOnFill.copy();
  }

  setGuaranteedStopLossDetails(
    guaranteedStopLossOnFill: GuaranteedStopLossDetails
  ): FixedPriceOrder {
    this.guaranteedStopLossOnFill = guaranteedStopLossOnFill.copy();
    return this;
  }

  getGuaranteedStopLossDetails(): GuaranteedStopLossDetails {
    return this.guaranteedStopLossOnFill.copy();
  }

  setTrailingStopLossOnFill(
    trailingStopLossOnFill: TrailingStopLossDetails
  ): FixedPriceOrder {
    this.trailingStopLossOnFill = trailingStopLossOnFill.copy();
    return this;
  }

  getTrailingStopLossOnFill(): TrailingStopLossDetails {
    return this.trailingStopLossOnFill.copy();
  }

  setTradeClientExtensions(
    tradeClientExtensions: ClientExtensions
  ): FixedPriceOrder {
    this.tradeClientExtensions = tradeClientExtensions.copy();
    return this;
  }

  getTradeClientExtensions(): ClientExtensions {
    return this.tradeClientExtensions.copy();
  }

  setFillingTransactionID(
    fillingTransactionID: TransactionID | string
  ): FixedPriceOrder {
    this.fillingTransactionID = TransactionIdUtils.transactionIdValue(
      fillingTransactionID
    );
    return this;
  }

  getFillingTransactionID(): TransactionID {
    return this.fillingTransactionID.copy();
  }

  setFilledTime(filledTime: DateTime | string): FixedPriceOrder {
    this.filledTime = PrimitiveUtils.dateTimeValue(filledTime);
    return this;
  }

  getFilledTime(): DateTime {
    return this.filledTime.copy();
  }

  setTradeOpenedID(tradeOpenedID: TradeID | string): FixedPriceOrder {
    this.tradeOpenedID = TradeIdUtils.tradeIdValue(tradeOpenedID);
    return this;
  }

  getTradeOpenedID(): TradeID {
    return this.tradeOpenedID.copy();
  }

  setTradeReducedID(tradeReducedID: TradeID | string): FixedPriceOrder {
    this.tradeReducedID = TradeIdUtils.tradeIdValue(tradeReducedID);
    return this;
  }

  getTradeReducedID(): TradeID {
    return this.tradeReducedID.copy();
  }

  setTradeClosedIDs(tradeClosedIDs: TradeID[] | string[]): FixedPriceOrder {
    this.tradeClosedIDs = TradeIdUtils.tradeIdValues(tradeClosedIDs);
    return this;
  }

  getTradeClosedIDs(): TradeID[] {
    const copyOfTradeIDs = new Array<TradeID>();
    this.tradeClosedIDs.forEach(item => copyOfTradeIDs.push(item.copy()));
    return copyOfTradeIDs;
  }

  copy(): FixedPriceOrder {
    return new FixedPriceOrder()
      .setId(this.id.copy())
      .setCreateTime(this.createTime.copy())
      .setState(this.state)
      .setClientExtensions(this.clientExtensions.copy())
      .setInstrument(this.instrument.copy())
      .setUnits(this.units.copy())
      .setPrice(this.price.copy())
      .setPositionFill(this.positionFill)
      .setTradeState(this.tradeState)
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
