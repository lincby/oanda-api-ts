import {AccountID} from './account.id';
import {JsonObject, JsonProperty} from 'json2typescript';
import {AccountIdJsonConverter} from '../converter/account/account.id.json.converter';
import {Currency} from '../primitives/currency';
import {CurrencyJsonConverter} from '../converter/primitives/currency.json.converter';
import {AccountUnits} from '../primitives/account.units';
import {AccountUnitsJsonConverter} from '../converter/primitives/account.units.json.converter';
import Decimal from 'decimal.js';
import {DateTime} from '../primitives/date.time';
import {DateTimeJsonConverter} from '../converter/primitives/date.time.json.converter';
import {GuaranteedStopLossOrderMode} from './guaranteed.stop.loss.order.mode';
import {GuaranteedStopLossOrderMutability} from './guaranteed.stop.loss.order.mutability';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/primitives/decimal.number.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {TransactionID} from '../transaction/transaction.id';
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TradeSummary} from '../trade/trade.summary';
import {Position} from '../position/position';
import {MarketOrder} from '../order/market.order';
import {FixedPriceOrder} from '../order/fixed.price.order';
import {OrderArrayJsonConverter} from '../converter/order/order.array.json.converter';

@JsonObject('Account')
export class Account {
  @JsonProperty('id', AccountIdJsonConverter, true)
  private id: AccountID = new AccountID('');
  @JsonProperty('alias', String, true)
  private alias = '';
  @JsonProperty('currency', CurrencyJsonConverter, true)
  private currency: Currency = new Currency('');
  @JsonProperty('createdByUserID', Number, true)
  private createdByUserID = 0;
  @JsonProperty('createdTime', DateTimeJsonConverter, true)
  private createdTime: DateTime = new DateTime('');
  @JsonProperty('guaranteedStopLossOrderMode', String, true)
  private guaranteedStopLossOrderMode: GuaranteedStopLossOrderMode =
    GuaranteedStopLossOrderMode.DISABLED;
  @JsonProperty('guaranteedStopLossOrderMutability', String, true)
  private guaranteedStopLossOrderMutability: GuaranteedStopLossOrderMutability =
    GuaranteedStopLossOrderMutability.CANCELABLE;
  @JsonProperty('createdTime', DateTimeJsonConverter, true)
  private resettablePLTime: DateTime = new DateTime('');
  @JsonProperty('marginRate', DecimalNumberJsonConverter, true)
  private marginRate: DecimalNumber = new DecimalNumber('');
  @JsonProperty('openTradeCount', Number, true)
  private openTradeCount = 0;
  @JsonProperty('openPositionCount', Number, true)
  private openPositionCount = 0;
  @JsonProperty('pendingOrderCount', Number, true)
  private pendingOrderCount = 0;
  @JsonProperty('hedgingEnabled', Boolean, true)
  private hedgingEnabled = false;
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, true)
  private unrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('NAV', AccountUnitsJsonConverter, true)
  private nAV: AccountUnits = new AccountUnits('');
  @JsonProperty('marginUsed', AccountUnitsJsonConverter, true)
  private marginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginAvailable', AccountUnitsJsonConverter, true)
  private marginAvailable: AccountUnits = new AccountUnits('');
  @JsonProperty('positionValue', AccountUnitsJsonConverter, true)
  private positionValue: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutUnrealizedPL', AccountUnitsJsonConverter, true)
  private marginCloseoutUnrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutNAV', AccountUnitsJsonConverter, true)
  private marginCloseoutNAV: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutMarginUsed', AccountUnitsJsonConverter, true)
  private marginCloseoutMarginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutPercent', DecimalNumberJsonConverter, true)
  private marginCloseoutPercent: DecimalNumber = new DecimalNumber('');
  @JsonProperty(
    'marginCloseoutPositionValue',
    DecimalNumberJsonConverter,
    false
  )
  private marginCloseoutPositionValue: DecimalNumber = new DecimalNumber('');
  @JsonProperty('withdrawalLimit', AccountUnitsJsonConverter, true)
  private withdrawalLimit: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCallMarginUsed', AccountUnitsJsonConverter, true)
  private marginCallMarginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCallPercent', DecimalNumberJsonConverter, true)
  private marginCallPercent: DecimalNumber = new DecimalNumber('');
  @JsonProperty('balance', AccountUnitsJsonConverter, true)
  private balance: AccountUnits = new AccountUnits('');
  @JsonProperty('pl', AccountUnitsJsonConverter, true)
  private pl: AccountUnits = new AccountUnits('');
  @JsonProperty('resettablePL', AccountUnitsJsonConverter, true)
  private resettablePL: AccountUnits = new AccountUnits('');
  @JsonProperty('financing', AccountUnitsJsonConverter, true)
  private financing: AccountUnits = new AccountUnits('');
  @JsonProperty('commission', AccountUnitsJsonConverter, true)
  private commission: AccountUnits = new AccountUnits('');
  @JsonProperty('dividendAdjustment', AccountUnitsJsonConverter, true)
  private dividendAdjustment: AccountUnits = new AccountUnits('');
  @JsonProperty('guaranteedExecutionFees', AccountUnitsJsonConverter, true)
  private guaranteedExecutionFees: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCallEnterTime', DateTimeJsonConverter, true)
  private marginCallEnterTime: DateTime = new DateTime('');
  @JsonProperty('marginCallExtensionCount', Number, true)
  private marginCallExtensionCount = 0;
  @JsonProperty('lastMarginCallExtensionTime', DateTimeJsonConverter, true)
  private lastMarginCallExtensionTime: DateTime = new DateTime('');
  @JsonProperty('lastTransactionID', TransactionIdJsonConverter, true)
  private lastTransactionID: TransactionID = new TransactionID('');
  @JsonProperty('trades', [TradeSummary], true)
  private trades: TradeSummary[] = new Array<TradeSummary>();
  @JsonProperty('positions', [Position], true)
  private positions: Position[] = new Array<Position>();
  @JsonProperty('orders', OrderArrayJsonConverter, true)
  private orders: (MarketOrder | FixedPriceOrder)[] = new Array<
    MarketOrder | FixedPriceOrder
  >();

  setAccountID(id: AccountID | string): Account {
    if (id instanceof AccountID) {
      this.id = id.copy();
    } else {
      this.id = new AccountID(id);
    }
    return this;
  }

  getAccountID(): AccountID {
    return this.id.copy();
  }

  setAlias(alias: string): Account {
    this.alias = alias;
    return this;
  }

  getAlias() {
    return this.alias;
  }

  setCurrency(currency: Currency | string): Account {
    if (currency instanceof Currency) {
      this.currency = currency.copy();
    } else {
      this.currency = new Currency(currency);
    }
    return this;
  }

  getCurrency(): Currency {
    return this.currency.copy();
  }

  setCreatedByUserID(createdByUserID: number): Account {
    this.createdByUserID = createdByUserID;
    return this;
  }

  getCreatedByUserID(): number {
    return this.createdByUserID;
  }

  setCreatedTime(createdTime: DateTime | string): Account {
    this.createdTime = PrimitiveUtils.dateTimeValue(createdTime);
    return this;
  }

  getCreatedTime(): DateTime {
    return this.createdTime.copy();
  }

  setGuaranteedStopLossOrderMode(
    guaranteedStopLossOrderMode: GuaranteedStopLossOrderMode
  ): Account {
    this.guaranteedStopLossOrderMode = guaranteedStopLossOrderMode;
    return this;
  }

  getGuaranteedStopLossOrderMode(): GuaranteedStopLossOrderMode {
    return this.guaranteedStopLossOrderMode;
  }

  setGuaranteedStopLossOrderMutability(
    guaranteedStopLossOrderMutability: GuaranteedStopLossOrderMutability
  ): Account {
    this.guaranteedStopLossOrderMutability = guaranteedStopLossOrderMutability;
    return this;
  }

  getGuaranteedStopLossOrderMutability(): GuaranteedStopLossOrderMutability {
    return this.guaranteedStopLossOrderMutability;
  }

  setResettablePLTime(resettablePLTime: DateTime | string): Account {
    this.resettablePLTime = PrimitiveUtils.dateTimeValue(resettablePLTime);
    return this;
  }

  getResettablePLTime(): DateTime {
    return this.resettablePLTime;
  }

  setMarginRate(marginRate: DecimalNumber | Decimal | string): Account {
    this.marginRate = PrimitiveUtils.decimalNumberValue(marginRate);
    return this;
  }

  getMarginRate(): DecimalNumber {
    return this.marginRate;
  }

  setOpenTradeCount(openTradeCount: number): Account {
    this.openTradeCount = openTradeCount;
    return this;
  }

  getOpenTradeCount(): number {
    return this.openTradeCount;
  }

  setOpenPositionCount(openPositionCount: number): Account {
    this.openPositionCount = openPositionCount;
    return this;
  }

  getOpenPositionCount(): number {
    return this.openPositionCount;
  }

  setPendingOrderCount(pendingOrderCount: number): Account {
    this.pendingOrderCount = pendingOrderCount;
    return this;
  }

  getPendingOrderCount(): number {
    return this.pendingOrderCount;
  }

  setHedgingEnabled(hedgingEnabled: boolean): Account {
    this.hedgingEnabled = hedgingEnabled;
    return this;
  }

  getHedgingEnabled(): boolean {
    return this.hedgingEnabled;
  }

  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): Account {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL.copy();
  }

  setNAV(nAV: AccountUnits | Decimal | string): Account {
    this.nAV = PrimitiveUtils.accountUnitValue(nAV);
    return this;
  }

  getNAV(): AccountUnits {
    return this.nAV.copy();
  }

  setMarginUsed(marginUsed: AccountUnits | Decimal | string): Account {
    this.marginUsed = PrimitiveUtils.accountUnitValue(marginUsed);
    return this;
  }

  getMarginUsed(): AccountUnits {
    return this.marginUsed.copy();
  }

  setMarginAvailable(
    marginAvailable: AccountUnits | Decimal | string
  ): Account {
    this.marginAvailable = PrimitiveUtils.accountUnitValue(marginAvailable);
    return this;
  }

  getMarginAvailable(): AccountUnits {
    return this.marginAvailable.copy();
  }

  setPositionValue(positionValue: AccountUnits | Decimal | string): Account {
    this.positionValue = PrimitiveUtils.accountUnitValue(positionValue);
    return this;
  }

  getPositionValue(): AccountUnits {
    return this.positionValue.copy();
  }

  setMarginCloseoutUnrealizedPL(
    marginCloseoutUnrealizedPL: AccountUnits | Decimal | string
  ): Account {
    this.marginCloseoutUnrealizedPL = PrimitiveUtils.accountUnitValue(
      marginCloseoutUnrealizedPL
    );
    return this;
  }

  getMarginCloseoutUnrealizedPL(): AccountUnits {
    return this.marginCloseoutUnrealizedPL.copy();
  }

  setMarginCloseoutNAV(
    marginCloseoutNAV: AccountUnits | Decimal | string
  ): Account {
    this.marginCloseoutNAV = PrimitiveUtils.accountUnitValue(marginCloseoutNAV);
    return this;
  }

  getMarginCloseoutNAV(): AccountUnits {
    return this.marginCloseoutNAV.copy();
  }

  setMarginCloseoutMarginUsed(
    marginCloseoutMarginUsed: AccountUnits | Decimal | string
  ): Account {
    this.marginCloseoutMarginUsed = PrimitiveUtils.accountUnitValue(
      marginCloseoutMarginUsed
    );
    return this;
  }

  getMarginCloseoutMarginUsed(): AccountUnits {
    return this.marginCloseoutMarginUsed;
  }

  setMarginCloseoutPercent(
    marginCloseoutPercent: DecimalNumber | Decimal | string
  ): Account {
    this.marginCloseoutPercent = PrimitiveUtils.decimalNumberValue(
      marginCloseoutPercent
    );
    return this;
  }

  getMarginCloseoutPercent(): DecimalNumber {
    return this.marginCloseoutPercent;
  }

  setMarginCloseoutPositionValue(
    marginCloseoutPositionValue: DecimalNumber | Decimal | string
  ): Account {
    this.marginCloseoutPositionValue = PrimitiveUtils.decimalNumberValue(
      marginCloseoutPositionValue
    );
    return this;
  }

  getMarginCloseoutPositionValue(): DecimalNumber {
    return this.marginCloseoutPositionValue;
  }

  setWithdrawalLimit(
    withdrawalLimit: AccountUnits | Decimal | string
  ): Account {
    this.withdrawalLimit = PrimitiveUtils.accountUnitValue(withdrawalLimit);
    return this;
  }

  getWithdrawalLimit(): AccountUnits {
    return this.withdrawalLimit.copy();
  }

  setMarginCallMarginUsed(
    marginCallMarginUsed: AccountUnits | Decimal | string
  ): Account {
    this.marginCallMarginUsed = PrimitiveUtils.accountUnitValue(
      marginCallMarginUsed
    );
    return this;
  }

  getMarginCallMarginUsed(): AccountUnits {
    return this.marginCallMarginUsed.copy();
  }

  setMarginCallPercent(
    marginCallPercent: DecimalNumber | Decimal | string
  ): Account {
    this.marginCallPercent = PrimitiveUtils.decimalNumberValue(
      marginCallPercent
    );
    return this;
  }

  getMarginCallPercent(): DecimalNumber {
    return this.marginCallPercent.copy();
  }

  setBalance(balance: AccountUnits | Decimal | string): Account {
    this.balance = PrimitiveUtils.accountUnitValue(balance);
    return this;
  }

  getBalance(): AccountUnits {
    return this.balance.copy();
  }

  setPl(pl: AccountUnits | Decimal | string): Account {
    this.pl = PrimitiveUtils.accountUnitValue(pl);
    return this;
  }

  getPl(): AccountUnits {
    return this.pl.copy();
  }

  setResettablePL(resettablePL: AccountUnits | Decimal | string): Account {
    this.resettablePL = PrimitiveUtils.accountUnitValue(resettablePL);
    return this;
  }

  getResettablePL(): AccountUnits {
    return this.resettablePL.copy();
  }

  setFinancing(financing: AccountUnits | Decimal | string): Account {
    this.financing = PrimitiveUtils.accountUnitValue(financing);
    return this;
  }

  getFinancing(): AccountUnits {
    return this.financing.copy();
  }

  setCommission(commission: AccountUnits | Decimal | string): Account {
    this.commission = PrimitiveUtils.accountUnitValue(commission);
    return this;
  }

  getCommission(): AccountUnits {
    return this.commission.copy();
  }

  setDividendAdjustment(
    dividendAdjustment: AccountUnits | Decimal | string
  ): Account {
    this.dividendAdjustment = PrimitiveUtils.accountUnitValue(
      dividendAdjustment
    );
    return this;
  }

  getDividendAdjustment(): AccountUnits {
    return this.dividendAdjustment.copy();
  }

  setGuaranteedExecutionFees(
    guaranteedExecutionFees: AccountUnits | Decimal | string
  ): Account {
    this.guaranteedExecutionFees = PrimitiveUtils.accountUnitValue(
      guaranteedExecutionFees
    );
    return this;
  }

  getGuaranteedExecutionFees(): AccountUnits {
    return this.guaranteedExecutionFees.copy();
  }

  setMarginCallEnterTime(marginCallEnterTime: DateTime | string): Account {
    this.marginCallEnterTime = PrimitiveUtils.dateTimeValue(
      marginCallEnterTime
    );
    return this;
  }

  getMarginCallEnterTime(): DateTime {
    return this.marginCallEnterTime.copy();
  }

  setMarginCallExtensionCount(marginCallExtensionCount: number): Account {
    this.marginCallExtensionCount = marginCallExtensionCount;
    return this;
  }

  getMarginCallExtensionCount(): number {
    return this.marginCallExtensionCount;
  }

  setLastMarginCallExtensionTime(
    lastMarginCallExtensionTime: DateTime | string
  ): Account {
    this.lastMarginCallExtensionTime = PrimitiveUtils.dateTimeValue(
      lastMarginCallExtensionTime
    );
    return this;
  }

  getLastMarginCallExtensionTime(): DateTime {
    return this.lastMarginCallExtensionTime.copy();
  }

  setLastTransactionID(lastTransactionID: TransactionID | string): Account {
    if (lastTransactionID instanceof TransactionID) {
      this.lastTransactionID = lastTransactionID.copy();
    } else {
      this.lastTransactionID = new TransactionID(lastTransactionID);
    }
    return this;
  }

  getLastTransactionID(): TransactionID {
    return this.lastTransactionID.copy();
  }

  setTrades(trades: TradeSummary[]): Account {
    const newTradeSummaries: TradeSummary[] = new Array<TradeSummary>();
    trades.forEach((item: TradeSummary) => newTradeSummaries.push(item.copy()));
    this.trades = newTradeSummaries;
    return this;
  }

  getTrades(): TradeSummary[] {
    const copyOfTradeSummaries = new Array<TradeSummary>();
    this.trades.forEach(item => copyOfTradeSummaries.push(item.copy()));
    return copyOfTradeSummaries;
  }

  setPositions(positions: Position[]): Account {
    const newPositions: Position[] = new Array<Position>();
    positions.forEach((item: Position) => newPositions.push(item.copy()));
    this.positions = newPositions;
    return this;
  }

  getPositions(): Position[] {
    const copyOfPositions = new Array<Position>();
    this.positions.forEach(item => copyOfPositions.push(item.copy()));
    return copyOfPositions;
  }

  setOrders(orders: (MarketOrder | FixedPriceOrder)[]): Account {
    const newOrders: (MarketOrder | FixedPriceOrder)[] = new Array<
      MarketOrder | FixedPriceOrder
    >();
    orders.forEach((item: MarketOrder | FixedPriceOrder) =>
      newOrders.push(item.copy())
    );
    this.orders = newOrders;
    return this;
  }

  getOrders(): (MarketOrder | FixedPriceOrder)[] {
    const copyOfOrders = new Array<MarketOrder | FixedPriceOrder>();
    this.orders.forEach(item => copyOfOrders.push(item.copy()));
    return copyOfOrders;
  }

  copy(): Account {
    return new Account()
      .setAccountID(this.id.copy())
      .setAlias(this.alias)
      .setCurrency(this.currency.copy())
      .setCreatedByUserID(this.createdByUserID)
      .setCreatedTime(this.createdTime.copy())
      .setGuaranteedStopLossOrderMode(this.guaranteedStopLossOrderMode)
      .setGuaranteedStopLossOrderMutability(
        this.guaranteedStopLossOrderMutability
      )
      .setResettablePLTime(this.resettablePLTime.copy())
      .setMarginRate(this.marginRate.copy())
      .setOpenTradeCount(this.openTradeCount)
      .setOpenPositionCount(this.openPositionCount)
      .setPendingOrderCount(this.pendingOrderCount)
      .setHedgingEnabled(this.hedgingEnabled)
      .setUnrealizedPL(this.unrealizedPL.copy())
      .setNAV(this.nAV.copy())
      .setMarginUsed(this.marginUsed.copy())
      .setMarginAvailable(this.marginAvailable.copy())
      .setPositionValue(this.positionValue.copy())
      .setMarginCloseoutUnrealizedPL(this.marginCloseoutUnrealizedPL.copy())
      .setMarginCloseoutNAV(this.marginCloseoutNAV.copy())
      .setMarginCloseoutMarginUsed(this.marginCloseoutMarginUsed.copy())
      .setMarginCloseoutPercent(this.marginCloseoutPercent.copy())
      .setMarginCloseoutPositionValue(this.marginCloseoutPositionValue.copy())
      .setWithdrawalLimit(this.withdrawalLimit.copy())
      .setMarginCallMarginUsed(this.marginCallMarginUsed.copy())
      .setMarginCallPercent(this.marginCallPercent.copy())
      .setBalance(this.balance.copy())
      .setPl(this.pl.copy())
      .setResettablePL(this.resettablePL.copy())
      .setFinancing(this.financing.copy())
      .setCommission(this.commission.copy())
      .setDividendAdjustment(this.dividendAdjustment.copy())
      .setGuaranteedExecutionFees(this.guaranteedExecutionFees.copy())
      .setMarginCallEnterTime(this.marginCallEnterTime.copy())
      .setMarginCallExtensionCount(this.marginCallExtensionCount)
      .setLastMarginCallExtensionTime(this.lastMarginCallExtensionTime.copy())
      .setLastTransactionID(this.lastTransactionID.copy())
      .setTrades(this.getTrades())
      .setPositions(this.getPositions())
      .setOrders(this.getOrders());
  }
}
