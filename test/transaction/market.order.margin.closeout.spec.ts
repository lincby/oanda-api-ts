import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {MarketOrderMarginCloseout} from '../../src/transaction/market.order.margin.closeout';
import {MarketOrderMarginCloseoutReason} from '../../src/transaction/market.order.margin.closeout.reason';

describe('MarketOrderMarginCloseout', () => {
  it('test setter and getter', () => {
    const marketOrderMarginCloseout: MarketOrderMarginCloseout = createMarketOrderMarginCloseout();
    expectMarketOrderMarginCloseout(marketOrderMarginCloseout);
  });

  it('test copy', () => {
    const marketOrderMarginCloseout: MarketOrderMarginCloseout = createMarketOrderMarginCloseout();
    const copyMarketOrderMarginCloseout: MarketOrderMarginCloseout = marketOrderMarginCloseout.copy();
    expectMarketOrderMarginCloseout(marketOrderMarginCloseout);
    expect(copyMarketOrderMarginCloseout).to.be.deep.equal(
      marketOrderMarginCloseout
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketOrderMarginCloseoutToJson: MarketOrderMarginCloseout = createMarketOrderMarginCloseout();
    const json: string = jsonConvert.serializeObject(
      marketOrderMarginCloseoutToJson
    );
    const marketOrderMarginCloseoutFromJson: MarketOrderMarginCloseout = jsonConvert.deserializeObject(
      json,
      MarketOrderMarginCloseout
    );
    expectMarketOrderMarginCloseout(marketOrderMarginCloseoutFromJson);
    expect(marketOrderMarginCloseoutFromJson).to.be.deep.equal(
      marketOrderMarginCloseoutToJson
    );
  });
});

export const createMarketOrderMarginCloseout = () =>
  new MarketOrderMarginCloseout().setReason(
    MarketOrderMarginCloseoutReason.REGULATORY_MARGIN_CALL_VIOLATION
  );

export const expectMarketOrderMarginCloseout = (
  marketOrderMarginCloseout: MarketOrderMarginCloseout
) =>
  expect(marketOrderMarginCloseout.getReason()).to.be.equal(
    MarketOrderMarginCloseoutReason.REGULATORY_MARGIN_CALL_VIOLATION
  );
