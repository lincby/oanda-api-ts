import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {PriceValue} from '../../src/price_common/price.value';
import {Decimal} from 'decimal.js';
import {DOUBLE_TEST_VALUE} from '../test.utils.spec';

describe('PriceValue', () => {
  it('test string constructor and getter', () => {
    const priceValue: PriceValue = createPriceValue();
    expectPriceValue(priceValue);
  });

  it('test price value units constructor and getter', () => {
    const priceValue: PriceValue = new PriceValue(createPriceValue());
    expectPriceValue(priceValue);
  });

  it('test decimal constructor and getter', () => {
    const priceValue: PriceValue = new PriceValue(
      new Decimal(DOUBLE_TEST_VALUE)
    );
    expectPriceValue(priceValue);
  });

  it('test copy', () => {
    const priceValue: PriceValue = createPriceValue();
    const copyPriceValue: PriceValue = priceValue.copy();
    expect(copyPriceValue).to.be.deep.equal(priceValue);
  });
});

export const createPriceValue = () =>
  new PriceValue(new Decimal(DOUBLE_TEST_VALUE).toString());

export const expectPriceValue = (priceValue: PriceValue) => {
  expect(priceValue.getValue()).to.be.equal(DOUBLE_TEST_VALUE.toString());
  expect(priceValue.getDecimalValue()).to.be.deep.equal(
    new Decimal(DOUBLE_TEST_VALUE)
  );
};
