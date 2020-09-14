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

@JsonObject('TradeSummary')
export class TradeSummary {
  @JsonProperty('id', TradeIdJsonConverter, false)
  private id: TradeID = new TradeID('');
  @JsonProperty('instrumentName', InstrumentNameJsonConverter, false)
  private instrumentName: InstrumentName = new InstrumentName('');
  @JsonProperty('price', PriceValueJsonConverter, false)
  private price: PriceValue = new PriceValue('');
  @JsonProperty('openTime', DateTimeJsonConverter, false)
  private openTime: DateTime = new DateTime('');
  @JsonProperty('state', String, true)
  private state: TradeState = TradeState.CLOSED;
  @JsonProperty('initialUnits', DecimalNumberJsonConverter, false)
  private initialUnits: DecimalNumber = new DecimalNumber('');
  @JsonProperty('initialMarginRequired', AccountUnitsJsonConverter, false)
  private initialMarginRequired: AccountUnits = new AccountUnits('');
  @JsonProperty('currentUnits', DecimalNumberJsonConverter, false)
  private currentUnits: DecimalNumber = new DecimalNumber('');
  @JsonProperty('realizedPL', AccountUnitsJsonConverter, false)
  private realizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, false)
  private unrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('marginUsed', AccountUnitsJsonConverter, false)
  private marginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('averageClosePrice', PriceValueJsonConverter, false)
  private averageClosePrice: PriceValue = new PriceValue('');
  @JsonProperty('closingTransactionIDs', TransactionIdArrayJsonConverter, false)
  private closingTransactionIDs: TransactionID[] = new Array<TransactionID>();

  setTradeID(id: TradeID): TradeSummary;
  setTradeID(id: string): TradeSummary;
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

  setInstrumentName(instrumentName: InstrumentName): TradeSummary;
  setInstrumentName(instrumentName: string): TradeSummary;
  setInstrumentName(instrumentName: InstrumentName | string): TradeSummary {
    this.instrumentName = PrimitiveUtils.instrumentNameValue(instrumentName);
    return this;
  }

  getInstrumentName(): InstrumentName {
    return this.instrumentName.copy();
  }

  setPrice(priceValue: PriceValue): TradeSummary;
  setPrice(priceValue: Decimal): TradeSummary;
  setPrice(priceValue: string): TradeSummary;
  setPrice(priceValue: PriceValue | Decimal | string): TradeSummary {
    this.price = PriceCommonUtils.priceValue(priceValue);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  setOpenTime(openTime: DateTime): TradeSummary;
  setOpenTime(openTime: string): TradeSummary;
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

  setInitialUnits(initialUnits: DecimalNumber): TradeSummary;
  setInitialUnits(initialUnits: Decimal): TradeSummary;
  setInitialUnits(initialUnits: string): TradeSummary;
  setInitialUnits(
    initialUnits: DecimalNumber | Decimal | string
  ): TradeSummary {
    this.initialUnits = PrimitiveUtils.decimalNumberValue(initialUnits);
    return this;
  }

  getInitialUnits(): DecimalNumber {
    return this.initialUnits.copy();
  }

  setInitialMarginRequired(initialMarginRequired: AccountUnits): TradeSummary;
  setInitialMarginRequired(initialMarginRequired: Decimal): TradeSummary;
  setInitialMarginRequired(initialMarginRequired: string): TradeSummary;
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

  setCurrentUnits(currentUnits: DecimalNumber): TradeSummary;
  setCurrentUnits(currentUnits: Decimal): TradeSummary;
  setCurrentUnits(currentUnits: string): TradeSummary;
  setCurrentUnits(
    currentUnits: DecimalNumber | Decimal | string
  ): TradeSummary {
    this.currentUnits = PrimitiveUtils.decimalNumberValue(currentUnits);
    return this;
  }

  getCurrentUnits(): DecimalNumber {
    return this.currentUnits.copy();
  }

  setRealizedPL(realizedPL: AccountUnits): TradeSummary;
  setRealizedPL(realizedPL: Decimal): TradeSummary;
  setRealizedPL(realizedPL: string): TradeSummary;
  setRealizedPL(realizedPL: AccountUnits | Decimal | string): TradeSummary {
    this.realizedPL = PrimitiveUtils.accountUnitValue(realizedPL);
    return this;
  }

  getRealizedPL(): AccountUnits {
    return this.realizedPL.copy();
  }

  setUnrealizedPL(unrealizedPL: AccountUnits): TradeSummary;
  setUnrealizedPL(unrealizedPL: Decimal): TradeSummary;
  setUnrealizedPL(unrealizedPL: string): TradeSummary;
  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): TradeSummary {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL;
  }

  setMarginUsed(marginUsed: AccountUnits): TradeSummary;
  setMarginUsed(marginUsed: Decimal): TradeSummary;
  setMarginUsed(marginUsed: string): TradeSummary;
  setMarginUsed(marginUsed: AccountUnits | Decimal | string): TradeSummary {
    this.marginUsed = PrimitiveUtils.accountUnitValue(marginUsed);
    return this;
  }

  getMarginUsed(): AccountUnits {
    return this.marginUsed;
  }

  setAverageClosePrice(averageClosePrice: PriceValue): TradeSummary;
  setAverageClosePrice(averageClosePrice: Decimal): TradeSummary;
  setAverageClosePrice(averageClosePrice: string): TradeSummary;
  setAverageClosePrice(
    averageClosePrice: PriceValue | Decimal | string
  ): TradeSummary {
    this.averageClosePrice = PriceCommonUtils.priceValue(averageClosePrice);
    return this;
  }

  getAverageClosePrice(): PriceValue {
    return this.averageClosePrice.copy();
  }

  setClosingTransactionIDs(closingTransactionIDs: string[] | TransactionID[]) {
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

  copy(): TradeSummary {
    return new TradeSummary()
      .setTradeID(this.id.copy())
      .setInstrumentName(this.instrumentName.copy())
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
      .setClosingTransactionIDs(this.getClosingTransactionIDs());
  }
}
