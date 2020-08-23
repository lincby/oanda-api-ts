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

  @JsonProperty('balance', AccountUnitsJsonConverter, false)
  private balance: AccountUnits = new AccountUnits('');

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
    if (createdTime instanceof DateTime) {
      this.createdTime = createdTime.copy();
    } else {
      this.createdTime = new DateTime(createdTime);
    }
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
    if (resettablePLTime instanceof DateTime) {
      this.resettablePLTime = resettablePLTime.copy();
    } else {
      this.resettablePLTime = new DateTime(resettablePLTime);
    }
    return this;
  }

  getResettablePLTime(): DateTime {
    return this.resettablePLTime;
  }

  setMarginRate(marginRate: DecimalNumber): Account;
  setMarginRate(marginRate: Decimal): Account;
  setMarginRate(marginRate: string): Account;
  setMarginRate(marginRate: DecimalNumber | Decimal | string): Account {
    if (marginRate instanceof DecimalNumber) {
      this.marginRate = marginRate.copy();
    } else if (marginRate instanceof Decimal) {
      this.marginRate = new DecimalNumber(marginRate);
    } else {
      this.marginRate = new DecimalNumber(marginRate);
    }
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

  setBalance(balance: AccountUnits): Account;
  setBalance(balance: Decimal): Account;
  setBalance(balance: string): Account;
  setBalance(balance: AccountUnits | Decimal | string): Account {
    if (balance instanceof AccountUnits) {
      this.balance = balance.copy();
    } else if (balance instanceof Decimal) {
      this.balance = new AccountUnits(balance);
    } else {
      this.balance = new AccountUnits(balance);
    }
    return this;
  }

  getBalance(): AccountUnits {
    return this.balance.copy();
  }

  copy(): Account {
    return new Account()
      .setAccountID(this.id.copy())
      .setAlias(this.alias)
      .setCurrency(this.currency.copy())
      .setCreatedByUserID(this.createdByUserID)
      .setBalance(this.balance.copy())
      .setCreatedTime(this.createdTime.copy())
      .setGuaranteedStopLossOrderMode(this.guaranteedStopLossOrderMode)
      .setGuaranteedStopLossOrderMutability(
        this.guaranteedStopLossOrderMutability
      )
      .setResettablePLTime(this.resettablePLTime.copy())
      .setMarginRate(this.marginRate.copy())
      .setOpenTradeCount(this.openTradeCount)
      .setOpenPositionCount(this.openPositionCount);
  }
}
