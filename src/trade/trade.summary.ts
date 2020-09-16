import {TradeID} from './trade.id';
import {TradeIdJsonConverter} from './../converter/trade/trade.id.json.converter';
import {JsonObject, JsonProperty} from 'json2typescript';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import Decimal from 'decimal.js';
import {PriceCommonUtils} from '../util/price.common.utils';
import {DateTime} from '../primitives/date.time';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {TradeState} from './trade.state';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import {AccountUnits} from '../primitives/account.units';
import {AccountUnitsJsonConverter} from '../converter/primitives/account.units.json.converter';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdArrayJsonConverter} from '../converter/transaction/transaction.id.array.json.converter';
import {ClientExtensions} from '../transaction/client.extensions';
import {OrderID} from '../order/order.id';
import {OrderUtils} from '../util/order.utils';
import {OrderIdJsonConverter} from '../converter/order/order.id.json.converter';

@JsonObject('TradeSummary')
export class TradeSummary {
  @JsonProperty('id', TradeIdJsonConverter, true)
  private id: TradeID = new TradeID('');
  @JsonProperty('instrument', InstrumentNameJsonConverter, true)
  private instrument: InstrumentName = new InstrumentName('');
  @JsonProperty('price', PriceValueJsonConverter, true)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('openTime', DateTimeJsonConverter, true)
  private openTime: DateTime = new DateTime('');
  @JsonProperty('state', String, true)
  private state: TradeState = TradeState.CLOSED;
  @JsonProperty('initialUnits', DecimalNumberJsonConverter, true)
  private initialUnits: DecimalNumber = new DecimalNumber('');
  @JsonProperty('initialMarginRequired', AccountUnitsJsonConverter, true)
  private initialMarginRequired: AccountUnits = new AccountUnits('');
  @JsonProperty('currentUnits', DecimalNumberJsonConverter, true)
  private currentUnits: DecimalNumber = new DecimalNumber('');
  @JsonProperty('realizedPL', AccountUnitsJsonConverter, true)
  private realizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, true)
  private unrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('marginUsed', AccountUnitsJsonConverter, true)
  private marginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('averageClosePrice', PriceValueJsonConverter, true)
  private averageClosePrice: PriceValue = new PriceValue('');
  @JsonProperty('closingTransactionIDs', TransactionIdArrayJsonConverter, true)
  private closingTransactionIDs: TransactionID[] = new Array<TransactionID>();
  @JsonProperty('financing', AccountUnitsJsonConverter, true)
  private financing: AccountUnits = new AccountUnits('');
  @JsonProperty('dividendAdjustment', AccountUnitsJsonConverter, true)
  private dividendAdjustment: AccountUnits = new AccountUnits('');
  @JsonProperty('closeTime', DateTimeJsonConverter, true)
  private closeTime: DateTime = new DateTime('');
  @JsonProperty('clientExtensions', ClientExtensions, true)
  private clientExtensions: ClientExtensions = new ClientExtensions();
  @JsonProperty('takeProfitOrderID', OrderIdJsonConverter, true)
  private takeProfitOrderID: OrderID = new OrderID('');
  @JsonProperty('stopLossOrderID', OrderIdJsonConverter, true)
  private stopLossOrderID: OrderID = new OrderID('');
  @JsonProperty('guaranteedStopLossOrderID', OrderIdJsonConverter, true)
  private guaranteedStopLossOrderID: OrderID = new OrderID('');
  @JsonProperty('trailingStopLossOrderID', OrderIdJsonConverter, true)
  private trailingStopLossOrderID: OrderID = new OrderID('');

  setTradeID(id: TradeID | string): TradeSummary {
    if (id instanceof TradeID) {
      this.id = id.copy();
    } else {
      this.id = new TradeID(id);
    }
    return this;
  }

  getTradeID(): TradeID {
    return this.id.copy();
  }

  setInstrument(instrumentName: InstrumentName | string): TradeSummary {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrumentName);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setPrice(priceValue: PriceValue | Decimal | string): TradeSummary {
    this.price = PriceCommonUtils.priceValue(priceValue);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setOpenTime(openTime: DateTime | string): TradeSummary {
    this.openTime = PrimitiveUtils.dateTimeValue(openTime);
    return this;
  }

  getOpenTime(): DateTime {
    return this.openTime.copy();
  }

  setState(state: TradeState): TradeSummary {
    this.state = state;
    return this;
  }

  getState(): TradeState {
    return this.state;
  }

  setInitialUnits(
    initialUnits: DecimalNumber | Decimal | string
  ): TradeSummary {
    this.initialUnits = PrimitiveUtils.decimalNumberValue(initialUnits);
    return this;
  }

  getInitialUnits(): DecimalNumber {
    return this.initialUnits.copy();
  }

  setInitialMarginRequired(
    initialMarginRequired: AccountUnits | Decimal | string
  ): TradeSummary {
    this.initialMarginRequired = PrimitiveUtils.accountUnitValue(
      initialMarginRequired
    );
    return this;
  }

  getInitialMarginRequired(): AccountUnits {
    return this.initialMarginRequired.copy();
  }

  setCurrentUnits(
    currentUnits: DecimalNumber | Decimal | string
  ): TradeSummary {
    this.currentUnits = PrimitiveUtils.decimalNumberValue(currentUnits);
    return this;
  }

  getCurrentUnits(): DecimalNumber {
    return this.currentUnits.copy();
  }

  setRealizedPL(realizedPL: AccountUnits | Decimal | string): TradeSummary {
    this.realizedPL = PrimitiveUtils.accountUnitValue(realizedPL);
    return this;
  }

  getRealizedPL(): AccountUnits {
    return this.realizedPL.copy();
  }

  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): TradeSummary {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL;
  }

  setMarginUsed(marginUsed: AccountUnits | Decimal | string): TradeSummary {
    this.marginUsed = PrimitiveUtils.accountUnitValue(marginUsed);
    return this;
  }

  getMarginUsed(): AccountUnits {
    return this.marginUsed;
  }

  setAverageClosePrice(
    averageClosePrice: PriceValue | Decimal | string
  ): TradeSummary {
    this.averageClosePrice = PriceCommonUtils.priceValue(averageClosePrice);
    return this;
  }

  getAverageClosePrice(): PriceValue {
    return this.averageClosePrice.copy();
  }

  setClosingTransactionIDs(
    closingTransactionIDs: string[] | TransactionID[]
  ): TradeSummary {
    const newClosingTransactionIDs: TransactionID[] = new Array<
      TransactionID
    >();

    closingTransactionIDs.forEach((item: any) => {
      if (item instanceof TransactionID) {
        newClosingTransactionIDs.push(item.copy());
      } else {
        newClosingTransactionIDs.push(new TransactionID(item));
      }
    });
    this.closingTransactionIDs = newClosingTransactionIDs;
    return this;
  }

  getClosingTransactionIDs(): TransactionID[] {
    const copyOfClosingTransactionID = new Array<TransactionID>();
    this.closingTransactionIDs.forEach(item =>
      copyOfClosingTransactionID.push(item.copy())
    );
    return copyOfClosingTransactionID;
  }

  setFinancing(financing: AccountUnits | Decimal | string): TradeSummary {
    this.financing = PrimitiveUtils.accountUnitValue(financing);
    return this;
  }

  getFinancing(): AccountUnits {
    return this.financing.copy();
  }

  setDividendAdjustment(
    dividendAdjustment: AccountUnits | Decimal | string
  ): TradeSummary {
    this.dividendAdjustment = PrimitiveUtils.accountUnitValue(
      dividendAdjustment
    );
    return this;
  }

  getDividendAdjustment(): AccountUnits {
    return this.dividendAdjustment.copy();
  }

  setCloseTime(closeTime: DateTime | string): TradeSummary {
    this.closeTime = PrimitiveUtils.dateTimeValue(closeTime);
    return this;
  }

  getCloseTime(): DateTime {
    return this.closeTime.copy();
  }

  setClientExtensions(clientExtensions: ClientExtensions): TradeSummary {
    this.clientExtensions = clientExtensions.copy();
    return this;
  }

  getClientExtensions(): ClientExtensions {
    return this.clientExtensions.copy();
  }

  setTakeProfitOrderID(takeProfitOrderID: OrderID | string): TradeSummary {
    this.takeProfitOrderID = OrderUtils.orderIdValue(takeProfitOrderID);
    return this;
  }

  getTakeProfitOrderID(): OrderID {
    return this.takeProfitOrderID.copy();
  }

  setStopLossOrderID(stopLossOrderID: OrderID | string): TradeSummary {
    this.stopLossOrderID = OrderUtils.orderIdValue(stopLossOrderID);
    return this;
  }

  getStopLossOrderID(): OrderID {
    return this.stopLossOrderID.copy();
  }

  setGuaranteedStopLossOrderID(
    guaranteedStopLossOrderID: OrderID | string
  ): TradeSummary {
    this.guaranteedStopLossOrderID = OrderUtils.orderIdValue(
      guaranteedStopLossOrderID
    );
    return this;
  }

  getGuaranteedStopLossOrderID(): OrderID {
    return this.guaranteedStopLossOrderID.copy();
  }

  setTrailingStopLossOrderID(
    trailingStopLossOrderID: OrderID | string
  ): TradeSummary {
    this.trailingStopLossOrderID = OrderUtils.orderIdValue(
      trailingStopLossOrderID
    );
    return this;
  }

  getTrailingStopLossOrderID(): OrderID {
    return this.trailingStopLossOrderID.copy();
  }

  copy(): TradeSummary {
    return new TradeSummary()
      .setTradeID(this.id.copy())
      .setInstrument(this.instrument.copy())
      .setPrice(this.price.copy())
      .setOpenTime(this.openTime.copy())
      .setState(this.state)
      .setInitialUnits(this.initialUnits.copy())
      .setInitialMarginRequired(this.initialMarginRequired.copy())
      .setCurrentUnits(this.currentUnits.copy())
      .setRealizedPL(this.realizedPL.copy())
      .setUnrealizedPL(this.unrealizedPL.copy())
      .setMarginUsed(this.marginUsed.copy())
      .setAverageClosePrice(this.averageClosePrice.copy())
      .setClosingTransactionIDs(this.getClosingTransactionIDs())
      .setFinancing(this.financing.copy())
      .setDividendAdjustment(this.dividendAdjustment.copy())
      .setCloseTime(this.closeTime.copy())
      .setClientExtensions(this.clientExtensions.copy())
      .setTakeProfitOrderID(this.takeProfitOrderID.copy())
      .setStopLossOrderID(this.stopLossOrderID.copy())
      .setGuaranteedStopLossOrderID(this.guaranteedStopLossOrderID.copy())
      .setTrailingStopLossOrderID(this.trailingStopLossOrderID.copy());
  }
}
