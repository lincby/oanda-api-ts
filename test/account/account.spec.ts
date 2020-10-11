import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Account} from '../../src/account/account';
import {createAccountID, expectAccountID} from './account.id.spec';
import {
  BOOLEAN_TEST_VALUE,
  INTEGER_TEST_VALUE,
  STRING_TEST_VALUE,
} from '../test.utils.spec';
import {JsonConvert} from 'json2typescript';
import {createCurrency, expectCurrency} from '../primitives/currency.spec';
import {
  createAccountUnits,
  expectAccountUnits,
} from '../primitives/account.units.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {GuaranteedStopLossOrderMode} from '../../src/account/guaranteed.stop.loss.order.mode';
import {GuaranteedStopLossOrderMutability} from '../../src/account/guaranteed.stop.loss.order.mutability';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {
  createTransactionID,
  expectTransactionID,
} from '../transaction/transaction.id.spec';
import {
  createTradeSummary,
  expectTradeSummary,
} from '../trade/trade.summary.spec';
import {createPosition, expectPosition} from '../position/position.spec';
import {createMarketOrder, expectMarketOrder} from '../order/market.order.spec';
import {
  createFixedPriceOrder,
  expectFixedPriceOrder,
} from '../order/fixed.price.order.spec';
import {MarketOrder} from '../../src/order/market.order';
import {FixedPriceOrder} from '../../src/order/fixed.price.order';

describe('Account', () => {
  it('test setter and getter', () => {
    const account: Account = createAccount();
    expectAccount(account);
  });

  it('test copy', () => {
    const account: Account = createAccount();
    const copyAccount: Account = account.copy();
    expectAccount(copyAccount);
    expect(copyAccount).to.be.deep.equal(account);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const accountToJson: Account = createAccount();
    const json: string = jsonConvert.serializeObject(accountToJson);
    //console.log('from class to json: ', json);
    const accountFromJson: Account = jsonConvert.deserializeObject(
      json,
      Account
    );
    //console.log('from json to class: ', accountFromJson);
    expectAccount(accountFromJson);
    expect(accountFromJson).to.be.deep.equal(accountToJson);
  });
});

const createAccount = (): Account =>
  new Account()
    .setAccountID(createAccountID())
    .setAlias(STRING_TEST_VALUE)
    .setCurrency(createCurrency())
    .setCreatedByUserID(INTEGER_TEST_VALUE)
    .setCreatedTime(createDateTime())
    .setGuaranteedStopLossOrderMode(GuaranteedStopLossOrderMode.ALLOWED)
    .setGuaranteedStopLossOrderMutability(
      GuaranteedStopLossOrderMutability.FIXED
    )
    .setResettablePLTime(createDateTime())
    .setMarginRate(createDecimalNumber())
    .setOpenTradeCount(INTEGER_TEST_VALUE)
    .setOpenPositionCount(INTEGER_TEST_VALUE)
    .setPendingOrderCount(INTEGER_TEST_VALUE)
    .setHedgingEnabled(BOOLEAN_TEST_VALUE)
    .setUnrealizedPL(createAccountUnits())
    .setNAV(createAccountUnits())
    .setMarginUsed(createAccountUnits())
    .setMarginAvailable(createAccountUnits())
    .setPositionValue(createAccountUnits())
    .setMarginCloseoutUnrealizedPL(createAccountUnits())
    .setMarginCloseoutNAV(createAccountUnits())
    .setMarginCloseoutMarginUsed(createAccountUnits())
    .setMarginCloseoutPercent(createDecimalNumber())
    .setMarginCloseoutPositionValue(createDecimalNumber())
    .setWithdrawalLimit(createAccountUnits())
    .setMarginCallMarginUsed(createAccountUnits())
    .setMarginCallPercent(createDecimalNumber())
    .setBalance(createAccountUnits())
    .setPl(createAccountUnits())
    .setResettablePL(createAccountUnits())
    .setFinancing(createAccountUnits())
    .setCommission(createAccountUnits())
    .setDividendAdjustment(createAccountUnits())
    .setGuaranteedExecutionFees(createAccountUnits())
    .setMarginCallEnterTime(createDateTime())
    .setMarginCallExtensionCount(INTEGER_TEST_VALUE)
    .setLastMarginCallExtensionTime(createDateTime())
    .setLastTransactionID(createTransactionID())
    .setTrades([createTradeSummary()])
    .setPositions([createPosition(), createPosition()])
    .setOrders([
      createMarketOrder(),
      createFixedPriceOrder(),
      createMarketOrder(),
      createFixedPriceOrder(),
    ]);

const expectAccount = (account: Account) => {
  expectAccountID(account.getAccountID());
  expect(account.getAlias()).to.be.equal(STRING_TEST_VALUE);
  expectCurrency(account.getCurrency());
  expect(account.getCreatedByUserID()).to.be.equal(INTEGER_TEST_VALUE);
  expectDateTime(account.getCreatedTime());
  expect(account.getGuaranteedStopLossOrderMode()).to.be.equal(
    GuaranteedStopLossOrderMode.ALLOWED
  );
  expect(account.getGuaranteedStopLossOrderMutability()).to.be.equal(
    GuaranteedStopLossOrderMutability.FIXED
  );
  expectDateTime(account.getResettablePLTime());
  expectDecimalNumber(account.getMarginRate());
  expect(account.getOpenTradeCount()).to.be.equal(INTEGER_TEST_VALUE);
  expect(account.getOpenPositionCount()).to.be.equal(INTEGER_TEST_VALUE);
  expect(account.getPendingOrderCount()).to.be.equal(INTEGER_TEST_VALUE);
  expect(account.getHedgingEnabled()).to.be.equal(BOOLEAN_TEST_VALUE);
  expectAccountUnits(account.getUnrealizedPL());
  expectAccountUnits(account.getNAV());
  expectAccountUnits(account.getMarginUsed());
  expectAccountUnits(account.getMarginAvailable());
  expectAccountUnits(account.getPositionValue());
  expectAccountUnits(account.getMarginCloseoutUnrealizedPL());
  expectAccountUnits(account.getMarginCloseoutNAV());
  expectAccountUnits(account.getMarginCloseoutMarginUsed());
  expectDecimalNumber(account.getMarginCloseoutPercent());
  expectDecimalNumber(account.getMarginCloseoutPositionValue());
  expectAccountUnits(account.getWithdrawalLimit());
  expectAccountUnits(account.getMarginCallMarginUsed());
  expectDecimalNumber(account.getMarginCallPercent());
  expectAccountUnits(account.getBalance());
  expectAccountUnits(account.getPl());
  expectAccountUnits(account.getResettablePL());
  expectAccountUnits(account.getFinancing());
  expectAccountUnits(account.getCommission());
  expectAccountUnits(account.getDividendAdjustment());
  expectAccountUnits(account.getGuaranteedExecutionFees());
  expectDateTime(account.getMarginCallEnterTime());
  expect(account.getMarginCallExtensionCount()).to.be.equal(INTEGER_TEST_VALUE);
  expectDateTime(account.getLastMarginCallExtensionTime());
  expectTransactionID(account.getLastTransactionID());
  expectTradeSummary(account.getTrades()[0]);
  expectPosition(account.getPositions()[0]);
  expectPosition(account.getPositions()[1]);
  expectMarketOrder(<MarketOrder>account.getOrders()[0]);
  expectFixedPriceOrder(<FixedPriceOrder>account.getOrders()[1]);
  expectMarketOrder(<MarketOrder>account.getOrders()[2]);
  expectFixedPriceOrder(<FixedPriceOrder>account.getOrders()[3]);
};
