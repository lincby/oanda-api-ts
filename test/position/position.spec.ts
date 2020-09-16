import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Position} from '../../src/position/position';
import {JsonConvert} from 'json2typescript';
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';
import {
  createAccountUnits,
  expectAccountUnits,
} from '../primitives/account.units.spec';

describe('Position', () => {
  it('test setter and getter', () => {
    const position: Position = createPosition();
    expectPosition(position);
  });

  it('test copy', () => {
    const position: Position = createPosition();
    const copyPosition: Position = position.copy();
    expectPosition(copyPosition);
    expect(copyPosition).to.be.deep.equal(position);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const positionToJson: Position = createPosition();
    const json: string = jsonConvert.serializeObject(positionToJson);
    console.log('from class to json: ', json);
    const positionFromJson: Position = jsonConvert.deserializeObject(
      json,
      Position
    );
    console.log('from json to class: ', positionFromJson);
    expectPosition(positionFromJson);
    expect(positionFromJson).to.be.deep.equal(positionToJson);
  });
});

export const createPosition = () =>
  new Position()
    .setInstrument(createInstrumentName())
    .setPl(createAccountUnits())
    .setUnrealizedPL(createAccountUnits())
    .setMarginUsed(createAccountUnits())
    .setResettablePL(createAccountUnits())
    .setFinancing(createAccountUnits())
    .setCommission(createAccountUnits())
    .setDividendAdjustment(createAccountUnits())
    .setGuaranteedExecutionFees(createAccountUnits());

export const expectPosition = (position: Position) => {
  expectInstrumentName(position.getInstrument());
  expectAccountUnits(position.getPl());
  expectAccountUnits(position.getUnrealizedPL());
  expectAccountUnits(position.getMarginUsed());
  expectAccountUnits(position.getResettablePL());
  expectAccountUnits(position.getFinancing());
  expectAccountUnits(position.getCommission());
  expectAccountUnits(position.getDividendAdjustment());
  expectAccountUnits(position.getGuaranteedExecutionFees());
};
