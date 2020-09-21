import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {MarketOrderPositionCloseout} from '../../src/transaction/market.order.position.closeout';
import {STRING_TEST_VALUE} from '../test.utils.spec';
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';

describe('MarketOrderPositionCloseout', () => {
  it('test setter and getter', () => {
    const marketOrderPositionCloseout: MarketOrderPositionCloseout = createMarketOrderPositionCloseout();
    expectMarketOrderPositionCloseout(marketOrderPositionCloseout);
  });

  it('test copy', () => {
    const marketOrderPositionCloseout: MarketOrderPositionCloseout = createMarketOrderPositionCloseout();
    const copyMarketOrderPositionCloseout: MarketOrderPositionCloseout = marketOrderPositionCloseout.copy();
    expectMarketOrderPositionCloseout(copyMarketOrderPositionCloseout);
    expect(copyMarketOrderPositionCloseout).to.be.deep.equal(
      marketOrderPositionCloseout
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketOrderPositionCloseoutToJson: MarketOrderPositionCloseout = createMarketOrderPositionCloseout();
    const json: string = jsonConvert.serializeObject(
      marketOrderPositionCloseoutToJson
    );
    const marketOrderPositionCloseoutFromJson: MarketOrderPositionCloseout = jsonConvert.deserializeObject(
      json,
      MarketOrderPositionCloseout
    );
    expectMarketOrderPositionCloseout(marketOrderPositionCloseoutFromJson);
    expect(marketOrderPositionCloseoutFromJson).to.be.deep.equal(
      marketOrderPositionCloseoutToJson
    );
  });
});

export const createMarketOrderPositionCloseout = () =>
  new MarketOrderPositionCloseout()
    .setInstrument(createInstrumentName())
    .setUnits(STRING_TEST_VALUE);

export const expectMarketOrderPositionCloseout = (
  marketOrderPositionCloseout: MarketOrderPositionCloseout
) => {
  expectInstrumentName(marketOrderPositionCloseout.getInstrument());
  expect(marketOrderPositionCloseout.getUnits()).to.be.equal(STRING_TEST_VALUE);
};
