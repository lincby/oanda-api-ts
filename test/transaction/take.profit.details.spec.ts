import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {TakeProfitDetails} from '../../src/transaction/take.profit.details';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {TimeInForce} from '../../src/order/time.in.force';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from './client.extensions.spec';

describe('TakeProfitDetails', () => {
  it('test setter and getter', () => {
    const takeProfitDetails: TakeProfitDetails = createTakeProfitDetails();
    expectTakeProfitDetails(takeProfitDetails);
  });

  it('test copy', () => {
    const takeProfitDetails: TakeProfitDetails = createTakeProfitDetails();
    const copyTakeProfitDetails: TakeProfitDetails = takeProfitDetails.copy();
    expectTakeProfitDetails(copyTakeProfitDetails);
    expect(copyTakeProfitDetails).to.be.deep.equal(takeProfitDetails);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const takeProfitDetailsToJson: TakeProfitDetails = createTakeProfitDetails();
    const json: string = jsonConvert.serializeObject(takeProfitDetailsToJson);
    console.log('from class to json: ', json);
    const takeProfitDetailsFromJson: TakeProfitDetails = jsonConvert.deserializeObject(
      json,
      TakeProfitDetails
    );
    console.log('from json to class: ', takeProfitDetailsFromJson);
    expectTakeProfitDetails(takeProfitDetailsFromJson);
    expect(takeProfitDetailsFromJson).to.be.deep.equal(takeProfitDetailsToJson);
  });
});

export const createTakeProfitDetails = () =>
  new TakeProfitDetails()
    .setPrice(createPriceValue())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setClientExtensions(createClientExtensions());

export const expectTakeProfitDetails = (
  takeProfitDetails: TakeProfitDetails
) => {
  expectPriceValue(takeProfitDetails.getPrice());
  expect(takeProfitDetails.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(takeProfitDetails.getGtdTime());
  expectClientExtensions(takeProfitDetails.getClientExtensions());
};
