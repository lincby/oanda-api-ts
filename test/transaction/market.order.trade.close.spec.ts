import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {MarketOrderTradeClose} from '../../src/transaction/market.order.trade.close';
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('MarketOrderTradeClose', () => {
  it('test setter and getter', () => {
    const marketOrderTradeClose: MarketOrderTradeClose = createMarketOrderTradeClose();
    expectMarketOrderTradeClose(marketOrderTradeClose);
  });

  it('test copy', () => {
    const marketOrderTradeClose: MarketOrderTradeClose = createMarketOrderTradeClose();
    const copyMarketOrderTradeClose: MarketOrderTradeClose = marketOrderTradeClose.copy();
    expectMarketOrderTradeClose(copyMarketOrderTradeClose);
    expect(copyMarketOrderTradeClose).to.be.deep.equal(marketOrderTradeClose);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketOrderTradeCloseToJson: MarketOrderTradeClose = createMarketOrderTradeClose();
    const json: string = jsonConvert.serializeObject(
      marketOrderTradeCloseToJson
    );
    const marketOrderTradeCloseFromJson: MarketOrderTradeClose = jsonConvert.deserializeObject(
      json,
      MarketOrderTradeClose
    );
    expectMarketOrderTradeClose(marketOrderTradeCloseFromJson);
    expect(marketOrderTradeCloseFromJson).to.be.deep.equal(
      marketOrderTradeCloseToJson
    );
  });
});

export const createMarketOrderTradeClose = () =>
  new MarketOrderTradeClose()
    .setTradeID(createTradeID())
    .setClientTradeID(STRING_TEST_VALUE)
    .setUnits(STRING_TEST_VALUE);

export const expectMarketOrderTradeClose = (
  marketOrderTradeClose: MarketOrderTradeClose
) => {
  expectTradeID(marketOrderTradeClose.getTradeID());
  expect(marketOrderTradeClose.getClientTradeID()).to.be.equal(
    STRING_TEST_VALUE
  );
  expect(marketOrderTradeClose.getUnits()).to.be.equal(STRING_TEST_VALUE);
};
