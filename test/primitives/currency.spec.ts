import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {Currency} from '../../src/primitives/currency';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('Currency', () => {
  it('test string constructor and getter', () => {
    const currency: Currency = createCurrency();
    expectCurrency(currency);
  });

  it('test currency constructor and getter', () => {
    const currency: Currency = new Currency(createCurrency());
    expectCurrency(currency);
  });

  it('test copy', () => {
    const currency: Currency = createCurrency();
    const copyCurrency: Currency = currency.copy();
    expect(copyCurrency).to.be.deep.equal(currency);
  });
});

export const createCurrency = () => new Currency(STRING_TEST_VALUE);

export const expectCurrency = (currency: Currency) =>
  expect(currency.getValue()).to.be.equal(STRING_TEST_VALUE);
