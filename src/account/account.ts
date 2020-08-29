import {AccountID} from './account.id';
import {JsonObject, JsonProperty} from 'json2typescript';
import {AccountIdJsonConverter} from '../converter/account.id.json.converter';
import {Currency} from '../primitives/currency';
import {CurrencyJsonConverter} from '../converter/currency.json.converter';
import {AccountUnits} from '../primitives/account.units';
import {AccountUnitsJsonConverter} from '../converter/account.units.json.converter';
import Decimal from 'decimal.js';
import {DateTime} from '../primitives/date.time';
import {DateTimeJsonConverter} from '../converter/date.time.json.converter';
import {GuaranteedStopLossOrderMode} from './guaranteed.stop.loss.order.mode';
import {GuaranteedStopLossOrderMutability} from './guaranteed.stop.loss.order.mutability';
import {DecimalNumber} from '../primitives/decimal.number';
import {DecimalNumberJsonConverter} from '../converter/decimal.number.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';

@JsonObject('Account')
export class Account {
  @JsonProperty('id', AccountIdJsonConverter, false)
  private id: AccountID = new AccountID('');
  @JsonProperty('alias', String, true)
  private alias = '';
  @JsonProperty('currency', CurrencyJsonConverter, false)
  private currency: Currency = new Currency('');
  @JsonProperty('createdByUserID', Number, false)
  private createdByUserID = 0;
  @JsonProperty('createdTime', DateTimeJsonConverter, false)
  private createdTime: DateTime = new DateTime('');
  @JsonProperty('guaranteedStopLossOrderMode', String, false)
  private guaranteedStopLossOrderMode: GuaranteedStopLossOrderMode =
    GuaranteedStopLossOrderMode.DISABLED;
  @JsonProperty('guaranteedStopLossOrderMutability', String, true)
  private guaranteedStopLossOrderMutability: GuaranteedStopLossOrderMutability =
    GuaranteedStopLossOrderMutability.CANCELABLE;
  @JsonProperty('createdTime', DateTimeJsonConverter, false)
  private resettablePLTime: DateTime = new DateTime('');
  @JsonProperty('marginRate', DecimalNumberJsonConverter, true)
  private marginRate: DecimalNumber = new DecimalNumber('');
  @JsonProperty('openTradeCount', Number, false)
  private openTradeCount = 0;
  @JsonProperty('openPositionCount', Number, false)
  private openPositionCount = 0;
  @JsonProperty('pendingOrderCount', Number, false)
  private pendingOrderCount = 0;
  @JsonProperty('hedgingEnabled', Boolean, false)
  private hedgingEnabled = false;
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, false)
  private unrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('NAV', AccountUnitsJsonConverter, false)
  private nAV: AccountUnits = new AccountUnits('');
  @JsonProperty('marginUsed', AccountUnitsJsonConverter, false)
  private marginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginAvailable', AccountUnitsJsonConverter, false)
  private marginAvailable: AccountUnits = new AccountUnits('');
  @JsonProperty('positionValue', AccountUnitsJsonConverter, false)
  private positionValue: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutUnrealizedPL', AccountUnitsJsonConverter, false)
  private marginCloseoutUnrealizedPL: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutNAV', AccountUnitsJsonConverter, false)
  private marginCloseoutNAV: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutMarginUsed', AccountUnitsJsonConverter, false)
  private marginCloseoutMarginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCloseoutPercent', DecimalNumberJsonConverter, false)
  private marginCloseoutPercent: DecimalNumber = new DecimalNumber('');
  @JsonProperty(
    'marginCloseoutPositionValue',
    DecimalNumberJsonConverter,
    false
  )
  private marginCloseoutPositionValue: DecimalNumber = new DecimalNumber('');
  @JsonProperty('withdrawalLimit', AccountUnitsJsonConverter, false)
  private withdrawalLimit: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCallMarginUsed', AccountUnitsJsonConverter, false)
  private marginCallMarginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('marginCallPercent', DecimalNumberJsonConverter, false)
  private marginCallPercent: DecimalNumber = new DecimalNumber('');
  @JsonProperty('balance', AccountUnitsJsonConverter, false)
  private balance: AccountUnits = new AccountUnits('');
  @JsonProperty('pl', AccountUnitsJsonConverter, false)
  private pl: AccountUnits = new AccountUnits('');
  @JsonProperty('resettablePL', AccountUnitsJsonConverter, false)
  private resettablePL: AccountUnits = new AccountUnits('');
  @JsonProperty('financing', AccountUnitsJsonConverter, false)
  private financing: AccountUnits = new AccountUnits('');
  @JsonProperty('commission', AccountUnitsJsonConverter, false)
  private commission: AccountUnits = new AccountUnits('');
  @JsonProperty('dividendAdjustment', AccountUnitsJsonConverter, false)
  private dividendAdjustment: AccountUnits = new AccountUnits('');
  @JsonProperty('guaranteedExecutionFees', AccountUnitsJsonConverter, false)
  private guaranteedExecutionFees: AccountUnits = new AccountUnits('');

  setAccountID(id: AccountID): Account;
  setAccountID(id: string): Account;
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

  setCurrency(currency: Currency): Account;
  setCurrency(currency: string): Account;
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

  setCreatedTime(createdTime: DateTime): Account;
  setCreatedTime(createdTime: string): Account;
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

  setResettablePLTime(resettablePLTime: DateTime): Account;
  setResettablePLTime(resettablePLTime: string): Account;
  setResettablePLTime(resettablePLTime: DateTime | string): Account {
    this.resettablePLTime = PrimitiveUtils.dateTimeValue(resettablePLTime);
    return this;
  }

  getResettablePLTime(): DateTime {
    return this.resettablePLTime;
  }

  setMarginRate(marginRate: DecimalNumber): Account;
  setMarginRate(marginRate: Decimal): Account;
  setMarginRate(marginRate: string): Account;
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

  setUnrealizedPL(unrealizedPL: AccountUnits): Account;
  setUnrealizedPL(unrealizedPL: Decimal): Account;
  setUnrealizedPL(unrealizedPL: string): Account;
  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): Account {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL.copy();
  }

  setNAV(nAV: AccountUnits): Account;
  setNAV(nAV: Decimal): Account;
  setNAV(nAV: string): Account;
  setNAV(nAV: AccountUnits | Decimal | string): Account {
    this.nAV = PrimitiveUtils.accountUnitValue(nAV);
    return this;
  }

  getNAV(): AccountUnits {
    return this.nAV.copy();
  }

  setMarginUsed(marginUsed: AccountUnits): Account;
  setMarginUsed(marginUsed: Decimal): Account;
  setMarginUsed(marginUsed: string): Account;
  setMarginUsed(marginUsed: AccountUnits | Decimal | string): Account {
    this.marginUsed = PrimitiveUtils.accountUnitValue(marginUsed);
    return this;
  }

  getMarginUsed(): AccountUnits {
    return this.marginUsed.copy();
  }

  setMarginAvailable(marginAvailable: AccountUnits): Account;
  setMarginAvailable(marginAvailable: Decimal): Account;
  setMarginAvailable(marginAvailable: string): Account;
  setMarginAvailable(
    marginAvailable: AccountUnits | Decimal | string
  ): Account {
    this.marginAvailable = PrimitiveUtils.accountUnitValue(marginAvailable);
    return this;
  }

  getMarginAvailable(): AccountUnits {
    return this.marginAvailable.copy();
  }

  setPositionValue(positionValue: AccountUnits): Account;
  setPositionValue(positionValue: Decimal): Account;
  setPositionValue(positionValue: string): Account;
  setPositionValue(positionValue: AccountUnits | Decimal | string): Account {
    this.positionValue = PrimitiveUtils.accountUnitValue(positionValue);
    return this;
  }

  getPositionValue(): AccountUnits {
    return this.positionValue.copy();
  }

  setMarginCloseoutUnrealizedPL(
    marginCloseoutUnrealizedPL: AccountUnits
  ): Account;
  setMarginCloseoutUnrealizedPL(marginCloseoutUnrealizedPL: Decimal): Account;
  setMarginCloseoutUnrealizedPL(marginCloseoutUnrealizedPL: string): Account;
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

  setMarginCloseoutNAV(marginCloseoutNAV: AccountUnits): Account;
  setMarginCloseoutNAV(marginCloseoutNAV: Decimal): Account;
  setMarginCloseoutNAV(marginCloseoutNAV: string): Account;
  setMarginCloseoutNAV(
    marginCloseoutNAV: AccountUnits | Decimal | string
  ): Account {
    this.marginCloseoutNAV = PrimitiveUtils.accountUnitValue(marginCloseoutNAV);
    return this;
  }

  getMarginCloseoutNAV(): AccountUnits {
    return this.marginCloseoutNAV.copy();
  }

  setMarginCloseoutMarginUsed(marginCloseoutMarginUsed: AccountUnits): Account;
  setMarginCloseoutMarginUsed(marginCloseoutMarginUsed: Decimal): Account;
  setMarginCloseoutMarginUsed(marginCloseoutMarginUsed: string): Account;
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

  setMarginCloseoutPercent(marginCloseoutPercent: DecimalNumber): Account;
  setMarginCloseoutPercent(marginCloseoutPercent: Decimal): Account;
  setMarginCloseoutPercent(marginCloseoutPercent: string): Account;
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
    marginCloseoutPositionValue: DecimalNumber
  ): Account;
  setMarginCloseoutPositionValue(marginCloseoutPositionValue: Decimal): Account;
  setMarginCloseoutPositionValue(marginCloseoutPositionValue: string): Account;
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

  setWithdrawalLimit(withdrawalLimit: AccountUnits): Account;
  setWithdrawalLimit(withdrawalLimit: Decimal): Account;
  setWithdrawalLimit(withdrawalLimit: string): Account;
  setWithdrawalLimit(
    withdrawalLimit: AccountUnits | Decimal | string
  ): Account {
    this.withdrawalLimit = PrimitiveUtils.accountUnitValue(withdrawalLimit);
    return this;
  }

  getWithdrawalLimit(): AccountUnits {
    return this.withdrawalLimit.copy();
  }

  setMarginCallMarginUsed(marginCallMarginUsed: AccountUnits): Account;
  setMarginCallMarginUsed(marginCallMarginUsed: Decimal): Account;
  setMarginCallMarginUsed(marginCallMarginUsed: string): Account;
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

  setMarginCallPercent(marginCallPercent: DecimalNumber): Account;
  setMarginCallPercent(marginCallPercent: Decimal): Account;
  setMarginCallPercent(marginCallPercent: string): Account;
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

  setBalance(balance: AccountUnits): Account;
  setBalance(balance: Decimal): Account;
  setBalance(balance: string): Account;
  setBalance(balance: AccountUnits | Decimal | string): Account {
    this.balance = PrimitiveUtils.accountUnitValue(balance);
    return this;
  }

  getBalance(): AccountUnits {
    return this.balance.copy();
  }

  setPl(pl: AccountUnits): Account;
  setPl(pl: Decimal): Account;
  setPl(pl: string): Account;
  setPl(pl: AccountUnits | Decimal | string): Account {
    this.pl = PrimitiveUtils.accountUnitValue(pl);
    return this;
  }

  getPl(): AccountUnits {
    return this.pl.copy();
  }

  setResettablePL(resettablePL: AccountUnits): Account;
  setResettablePL(resettablePL: Decimal): Account;
  setResettablePL(resettablePL: string): Account;
  setResettablePL(resettablePL: AccountUnits | Decimal | string): Account {
    this.resettablePL = PrimitiveUtils.accountUnitValue(resettablePL);
    return this;
  }

  getResettablePL(): AccountUnits {
    return this.resettablePL.copy();
  }

  setFinancing(financing: AccountUnits): Account;
  setFinancing(financing: Decimal): Account;
  setFinancing(financing: string): Account;
  setFinancing(financing: AccountUnits | Decimal | string): Account {
    this.financing = PrimitiveUtils.accountUnitValue(financing);
    return this;
  }

  getFinancing(): AccountUnits {
    return this.financing.copy();
  }

  setCommission(commission: AccountUnits): Account;
  setCommission(commission: Decimal): Account;
  setCommission(commission: string): Account;
  setCommission(commission: AccountUnits | Decimal | string): Account {
    this.commission = PrimitiveUtils.accountUnitValue(commission);
    return this;
  }

  getCommission(): AccountUnits {
    return this.commission.copy();
  }

  setDividendAdjustment(dividendAdjustment: AccountUnits): Account;
  setDividendAdjustment(dividendAdjustment: Decimal): Account;
  setDividendAdjustment(dividendAdjustment: string): Account;
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

  setGuaranteedExecutionFees(guaranteedExecutionFees: AccountUnits): Account;
  setGuaranteedExecutionFees(guaranteedExecutionFees: Decimal): Account;
  setGuaranteedExecutionFees(guaranteedExecutionFees: string): Account;
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
      .setGuaranteedExecutionFees(this.guaranteedExecutionFees.copy());
  }
}
