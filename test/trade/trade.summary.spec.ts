import {describe, it} from 'mocha';
import {expect} from 'chai';
import {TradeSummary} from '../../src/trade/trade.summary';
import {createTradeID, expectTradeID} from './trade.id.spec';
import {JsonConvert} from 'json2typescript';
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {TradeState} from '../../src/trade/trade.state';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {
  createAccountUnits,
  expectAccountUnits,
} from '../primitives/account.units.spec';

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
    .setInstrumentName(createInstrumentName())
    .setPrice(createPriceValue())
    .setOpenTime(createDateTime())
    .setState(TradeState.OPEN)
    .setInitialUnits(createDecimalNumber())
    .setInitialMarginRequired(createAccountUnits())
    .setCurrentUnits(createDecimalNumber())
    .setRealizedPL(createAccountUnits())
    .setUnrealizedPL(createAccountUnits())
    .setMarginUsed(createAccountUnits())
    .setAverageClosePrice(createPriceValue());

const expectTradeSummary = (tradeSummary: TradeSummary) => {
  expectTradeID(tradeSummary.getTradeID());
  expectInstrumentName(tradeSummary.getInstrumentName());
  expectPriceValue(tradeSummary.getPrice());
  expectDateTime(tradeSummary.getOpenTime());
  expect(tradeSummary.getState()).to.be.equal(TradeState.OPEN);
  expectDecimalNumber(tradeSummary.getInitialUnits());
  expectAccountUnits(tradeSummary.getInitialMarginRequired());
  expectDecimalNumber(tradeSummary.getCurrentUnits());
  expectAccountUnits(tradeSummary.getRealizedPL());
  expectAccountUnits(tradeSummary.getUnrealizedPL());
  expectAccountUnits(tradeSummary.getMarginUsed());
  expectPriceValue(tradeSummary.getAverageClosePrice());
};
