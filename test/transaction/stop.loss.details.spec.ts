import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {StopLossDetails} from '../../src/transaction/stop.loss.details';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
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

describe('StopLossDetails', () => {
  it('test setter and getter', () => {
    const stopLossDetails: StopLossDetails = createStopLossDetails();
    expectStopLossDetails(stopLossDetails);
  });

  it('test copy', () => {
    const stopLossDetails: StopLossDetails = createStopLossDetails();
    const copyStopLossDetails: StopLossDetails = stopLossDetails.copy();
    expectStopLossDetails(copyStopLossDetails);
    expect(copyStopLossDetails).to.be.deep.equal(stopLossDetails);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const stopLossDetailsToJson: StopLossDetails = createStopLossDetails();
    const json: string = jsonConvert.serializeObject(stopLossDetailsToJson);
    console.log('from class to json: ', json);
    const stopLossDetailsFromJson: StopLossDetails = jsonConvert.deserializeObject(
      json,
      StopLossDetails
    );
    console.log('from json to class: ', stopLossDetailsFromJson);
    expectStopLossDetails(stopLossDetailsFromJson);
    expect(stopLossDetailsFromJson).to.be.deep.equal(stopLossDetailsToJson);
  });
});

export const createStopLossDetails = () =>
  new StopLossDetails()
    .setPrice(createPriceValue())
    .setDistance(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setClientExtensions(createClientExtensions());

export const expectStopLossDetails = (stopLossDetails: StopLossDetails) => {
  expectPriceValue(stopLossDetails.getPrice());
  expectDecimalNumber(stopLossDetails.getDistance());
  expect(stopLossDetails.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(stopLossDetails.getGtdTime());
  expectClientExtensions(stopLossDetails.getClientExtensions());
};
