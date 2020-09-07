import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {AccountUnits} from '../../src/primitives/account.units';
import {Decimal} from 'decimal.js';
import {DOUBLE_TEST_VALUE} from '../test.utils.spec';

describe('AccountUnits', () => {
  it('test string constructor and getter', () => {
    const accountUnits: AccountUnits = createAccountUnits();
    expectAccountUnits(accountUnits);
  });

  it('test account units constructor and getter', () => {
    const accountUnits: AccountUnits = new AccountUnits(createAccountUnits());
    expectAccountUnits(accountUnits);
  });

  it('test decimal constructor and getter', () => {
    const accountUnits: AccountUnits = new AccountUnits(
      new Decimal(DOUBLE_TEST_VALUE)
    );
    expectAccountUnits(accountUnits);
  });

  it('test copy', () => {
    const accountUnits: AccountUnits = createAccountUnits();
    const copyAccountUnits: AccountUnits = accountUnits.copy();
    expect(copyAccountUnits).to.be.deep.equal(accountUnits);
  });
});

export const createAccountUnits = () =>
  new AccountUnits(new Decimal(DOUBLE_TEST_VALUE).toString());

export const expectAccountUnits = (accountUnits: AccountUnits) => {
  expect(accountUnits.getValue()).to.be.equal(DOUBLE_TEST_VALUE.toString());
  expect(accountUnits.getDecimalValue()).to.be.deep.equal(
    new Decimal(DOUBLE_TEST_VALUE)
  );
};
