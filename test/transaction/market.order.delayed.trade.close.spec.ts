import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MarketOrderDelayedTradeClose} from '../../src/transaction/market.order.delayed.trade.close';
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';
import {JsonConvert} from 'json2typescript';
import {createTransactionID, expectTransactionID} from './transaction.id.spec';

describe('MarketOrderDelayedTradeClose', () => {
  it('test setter and getter', () => {
    const marketOrderDelayedTradeClose: MarketOrderDelayedTradeClose = createMarketOrderDelayedTradeClose();
    expectMarketOrderDelayedTradeClose(marketOrderDelayedTradeClose);
  });

  it('test copy', () => {
    const marketOrderDelayedTradeClose: MarketOrderDelayedTradeClose = createMarketOrderDelayedTradeClose();
    const copyMarketOrderDelayedTradeClose: MarketOrderDelayedTradeClose = marketOrderDelayedTradeClose.copy();
    expectMarketOrderDelayedTradeClose(copyMarketOrderDelayedTradeClose);
    expect(copyMarketOrderDelayedTradeClose).to.be.deep.equal(
      marketOrderDelayedTradeClose
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketOrderDelayedTradeCloseToJson: MarketOrderDelayedTradeClose = createMarketOrderDelayedTradeClose();
    const json: string = jsonConvert.serializeObject(
      marketOrderDelayedTradeCloseToJson
    );
    console.log('from class to json: ', json);
    const marketOrderDelayedTradeCloseFromJson: MarketOrderDelayedTradeClose = jsonConvert.deserializeObject(
      json,
      MarketOrderDelayedTradeClose
    );
    console.log('from json to class: ', marketOrderDelayedTradeCloseFromJson);
    expectMarketOrderDelayedTradeClose(marketOrderDelayedTradeCloseFromJson);
    expect(marketOrderDelayedTradeCloseFromJson).to.be.deep.equal(
      marketOrderDelayedTradeCloseToJson
    );
  });
});

export const createMarketOrderDelayedTradeClose = () =>
  new MarketOrderDelayedTradeClose()
    .setTradeID(createTradeID())
    .setClientTradeID(createTradeID())
    .setSourceTransactionID(createTransactionID());

export const expectMarketOrderDelayedTradeClose = (
  marketOrderDelayedTradeClose: MarketOrderDelayedTradeClose
) => {
  expectTradeID(marketOrderDelayedTradeClose.getTradeID());
  expectTradeID(marketOrderDelayedTradeClose.getClientTradeID());
  expectTransactionID(marketOrderDelayedTradeClose.getSourceTransactionID());
};
