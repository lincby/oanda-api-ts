import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {DecimalNumber} from '../../src/primitives/decimal.number';
import {Decimal} from 'decimal.js';
import {DOUBLE_TEST_VALUE} from '../test.utils.spec';

describe('DecimalNumber', () => {
  it('test string constructor and getter', () => {
    const decimalNumber: DecimalNumber = createDecimalNumber();
    expectDecimalNumber(decimalNumber);
  });

  it('test decimal number units constructor and getter', () => {
    const decimalNumber: DecimalNumber = new DecimalNumber(
      createDecimalNumber()
    );
    expectDecimalNumber(decimalNumber);
  });

  it('test decimal constructor and getter', () => {
    const decimalNumber: DecimalNumber = new DecimalNumber(
      new Decimal(DOUBLE_TEST_VALUE)
    );
    expectDecimalNumber(decimalNumber);
  });

  it('test copy', () => {
    const decimalNumber: DecimalNumber = createDecimalNumber();
    const copyDecimalNumber: DecimalNumber = decimalNumber.copy();
    expect(copyDecimalNumber).to.be.deep.equal(decimalNumber);
  });
});

export const createDecimalNumber = () =>
  new DecimalNumber(new Decimal(DOUBLE_TEST_VALUE).toString());

export const expectDecimalNumber = (currency: DecimalNumber) => {
  expect(currency.getValue()).to.be.equal(DOUBLE_TEST_VALUE.toString());
  expect(currency.getDecimalValue()).to.be.deep.equal(
    new Decimal(DOUBLE_TEST_VALUE)
  );
};
