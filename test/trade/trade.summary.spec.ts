import {describe, it} from 'mocha';
import {expect} from 'chai';
import {TradeSummary} from '../../src/trade/trade.summary';
import {createTradeID, expectTradeID} from './trade.id.spec';
import {JsonConvert} from 'json2typescript';
import {createInstrumentName, expectInstrumentName} from '../primitives/instrument.name.spec';

describe('TradeSummary', () => {
  it('test setter and getter', () => {
    const tradeSummary: TradeSummary = createTradeSummary();
    expectTradeSummary(tradeSummary);
  });

  it('test copy', () => {
    const tradeSummary: TradeSummary = createTradeSummary();
    const copyTradeSummary: TradeSummary = tradeSummary.copy();
    expectTradeSummary(copyTradeSummary);
    expect(copyTradeSummary).to.be.deep.equal(tradeSummary);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const tradeSummaryToJson: TradeSummary = createTradeSummary();
    const json: string = jsonConvert.serializeObject(tradeSummaryToJson);
    console.log('from class to json: ', json);
    const tradeSummaryFromJson: TradeSummary = jsonConvert.deserializeObject(
      json,
      TradeSummary
    );
    console.log('from json to class: ', tradeSummaryFromJson);
    expectTradeSummary(tradeSummaryFromJson);
    expect(tradeSummaryFromJson).to.be.deep.equal(tradeSummaryToJson);
  });
});

const createTradeSummary = (): TradeSummary =>
  new TradeSummary()
      .setTradeID(createTradeID())
      .setInstrumentName(createInstrumentName());

const expectTradeSummary = (tradeSummary: TradeSummary) => {
  expectTradeID(tradeSummary.getTradeID());
  expectInstrumentName(tradeSummary.getInstrumentName());
};
