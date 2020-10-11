import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {GuaranteedStopLossDetails} from '../../src/transaction/guaranteed.stop.loss.details';
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

describe('GuaranteedStopLossDetails', () => {
  it('test setter and getter', () => {
    const guaranteedStopLossDetails: GuaranteedStopLossDetails = createGuaranteedStopLossDetails();
    expectGuaranteedStopLossDetails(guaranteedStopLossDetails);
  });

  it('test copy', () => {
    const guaranteedStopLossDetails: GuaranteedStopLossDetails = createGuaranteedStopLossDetails();
    const copyGuaranteedStopLossDetails: GuaranteedStopLossDetails = guaranteedStopLossDetails.copy();
    expectGuaranteedStopLossDetails(copyGuaranteedStopLossDetails);
    expect(copyGuaranteedStopLossDetails).to.be.deep.equal(
      guaranteedStopLossDetails
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const guaranteedStopLossDetailsToJson: GuaranteedStopLossDetails = createGuaranteedStopLossDetails();
    const json: string = jsonConvert.serializeObject(
      guaranteedStopLossDetailsToJson
    );
    const guaranteedStopLossDetailsFromJson: GuaranteedStopLossDetails = jsonConvert.deserializeObject(
      json,
      GuaranteedStopLossDetails
    );
    expectGuaranteedStopLossDetails(guaranteedStopLossDetailsFromJson);
    expect(guaranteedStopLossDetailsFromJson).to.be.deep.equal(
      guaranteedStopLossDetailsToJson
    );
  });
});

export const createGuaranteedStopLossDetails = () =>
  new GuaranteedStopLossDetails()
    .setPrice(createPriceValue())
    .setDistance(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setClientExtensions(createClientExtensions());

export const expectGuaranteedStopLossDetails = (
  guaranteedStopLossDetails: GuaranteedStopLossDetails
) => {
  expectPriceValue(guaranteedStopLossDetails.getPrice());
  expectDecimalNumber(guaranteedStopLossDetails.getDistance());
  expect(guaranteedStopLossDetails.getTimeInForce()).to.be.equal(
    TimeInForce.GFD
  );
  expectDateTime(guaranteedStopLossDetails.getGtdTime());
  expectClientExtensions(guaranteedStopLossDetails.getClientExtensions());
};
