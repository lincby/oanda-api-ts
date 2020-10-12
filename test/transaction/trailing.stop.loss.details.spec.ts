import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {TrailingStopLossDetails} from '../../src/transaction/trailing.stop.loss.details';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {TimeInForce} from '../../src/order/time.in.force';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from './client.extensions.spec';

describe('TrailingStopLossDetails', () => {
  it('test setter and getter', () => {
    const trailingStopLossDetailsDetails: TrailingStopLossDetails = createTrailingStopLossDetails();
    expectTrailingStopLossDetails(trailingStopLossDetailsDetails);
  });

  it('test copy', () => {
    const trailingStopLossDetails: TrailingStopLossDetails = createTrailingStopLossDetails();
    const copyTrailingStopLossDetails: TrailingStopLossDetails = trailingStopLossDetails.copy();
    expectTrailingStopLossDetails(copyTrailingStopLossDetails);
    expect(copyTrailingStopLossDetails).to.be.deep.equal(
      trailingStopLossDetails
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const trailingStopLossDetailsToJson: TrailingStopLossDetails = createTrailingStopLossDetails();
    const json: string = jsonConvert.serializeObject(
      trailingStopLossDetailsToJson
    );
    const trailingStopLossDetailsFromJson: TrailingStopLossDetails = jsonConvert.deserializeObject(
      json,
      TrailingStopLossDetails
    );
    expectTrailingStopLossDetails(trailingStopLossDetailsFromJson);
    expect(trailingStopLossDetailsFromJson).to.be.deep.equal(
      trailingStopLossDetailsToJson
    );
  });
});

export const createTrailingStopLossDetails = () =>
  new TrailingStopLossDetails()
    .setDistance(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setClientExtensions(createClientExtensions());

export const expectTrailingStopLossDetails = (
  trailingStopLossDetails: TrailingStopLossDetails
) => {
  expectDecimalNumber(trailingStopLossDetails.getDistance());
  expect(trailingStopLossDetails.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(trailingStopLossDetails.getGtdTime());
  expectClientExtensions(trailingStopLossDetails.getClientExtensions());
};
