import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Account} from '../../src';
import {createAccountID, expectAccountID} from './account.id.spec';
import {INTEGER_TEST_VALUE, STRING_TEST_VALUE} from '../test.utils.spec';
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

describe('Account', () => {
  it('test setter and getter', () => {
    const account: Account = createAccount();
    expectAccount(account);
  });

  it('test copy', () => {
    const account: Account = createAccount();
    const copyAccount: Account = account.copy();
    expect(copyAccount).to.be.deep.equal(account);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const accountToJson: Account = createAccount();
    const json: string = jsonConvert.serializeObject(accountToJson);
    console.log('from class to json: ', json);
    const accountFromJson: Account = jsonConvert.deserializeObject(
      json,
      Account
    );
    console.log('from json to class: ', accountFromJson);
    expect(accountFromJson).to.be.deep.equal(accountToJson);
  });
});

const createAccount = () => {
  return new Account()
    .setAccountID(createAccountID())
    .setAlias(STRING_TEST_VALUE)
    .setCurrency(createCurrency())
    .setCreatedByUserID(INTEGER_TEST_VALUE)
    .setCreatedTime(createDateTime())
    .setGuaranteedStopLossOrderMode(GuaranteedStopLossOrderMode.ALLOWED)
    .setGuaranteedStopLossOrderMutability(
      GuaranteedStopLossOrderMutability.FIXED
    )
    .setBalance(createAccountUnits())
    .setResettablePLTime(createDateTime())
    .setMarginRate(createDecimalNumber())
    .setOpenTradeCount(INTEGER_TEST_VALUE)
    .setOpenPositionCount(INTEGER_TEST_VALUE);
};

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
  expectAccountUnits(account.getBalance());
  expectDateTime(account.getResettablePLTime());
  expectDecimalNumber(account.getMarginRate());
  expect(account.getOpenTradeCount()).to.be.equal(INTEGER_TEST_VALUE);
  expect(account.getOpenPositionCount()).to.be.equal(INTEGER_TEST_VALUE);
};
