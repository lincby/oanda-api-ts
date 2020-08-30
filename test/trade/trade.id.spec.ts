import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {TradeID} from '../../src/trade/trade.id';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('TradeID', () => {
  it('test constructor and getter', () => {
    const tradeID: TradeID = createTradeID();
    expectTradeID(tradeID);
  });

  it('test copy', () => {
    const tradeID: TradeID = createTradeID();
    const copyTradeID: TradeID = tradeID.copy();
    expect(copyTradeID).to.be.deep.equal(tradeID);
  });
});

export const createTradeID = () => new TradeID(STRING_TEST_VALUE);

export const expectTradeID = (tradeID: TradeID) =>
  expect(tradeID.getValue()).to.be.equal(STRING_TEST_VALUE);
