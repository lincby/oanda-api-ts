import {describe, it} from 'mocha';
import {expect} from 'chai';
import {PositionSide} from '../../src/position/position.side';
import {JsonConvert} from 'json2typescript';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';
import {
  createAccountUnits,
  expectAccountUnits,
} from '../primitives/account.units.spec';

describe('PositionSide', () => {
  it('test setter and getter', () => {
    const positionSide: PositionSide = createPositionSide();
    expectPositionSide(positionSide);
  });

  it('test copy', () => {
    const positionSide: PositionSide = createPositionSide();
    const copyPositionSide: PositionSide = positionSide.copy();
    expectPositionSide(copyPositionSide);
    expect(copyPositionSide).to.be.deep.equal(positionSide);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const positionSideToJson: PositionSide = createPositionSide();
    const json: string = jsonConvert.serializeObject(positionSideToJson);
    const positionSideFromJson: PositionSide = jsonConvert.deserializeObject(
      json,
      PositionSide
    );
    expectPositionSide(positionSideFromJson);
    expect(positionSideFromJson).to.be.deep.equal(positionSideToJson);
  });
});

export const createPositionSide = () =>
  new PositionSide()
    .setUnits(createDecimalNumber())
    .setAveragePrice(createPriceValue())
    .setTradeIDs([createTradeID(), createTradeID()])
    .setPl(createAccountUnits())
    .setUnrealizedPL(createAccountUnits())
    .setResettablePL(createAccountUnits())
    .setFinancing(createAccountUnits())
    .setDividendAdjustment(createAccountUnits())
    .setGuaranteedExecutionFees(createAccountUnits());

export const expectPositionSide = (positionSide: PositionSide) => {
  expectDecimalNumber(positionSide.getUnits());
  expectPriceValue(positionSide.getAveragePrice());
  expectTradeID(positionSide.getTradeIDs()[0]);
  expectTradeID(positionSide.getTradeIDs()[1]);
  expectAccountUnits(positionSide.getPl());
  expectAccountUnits(positionSide.getUnrealizedPL());
  expectAccountUnits(positionSide.getResettablePL());
  expectAccountUnits(positionSide.getFinancing());
  expectAccountUnits(positionSide.getDividendAdjustment());
  expectAccountUnits(positionSide.getGuaranteedExecutionFees());
};
