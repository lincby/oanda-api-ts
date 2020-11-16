import {describe, it} from 'mocha';
import {expect} from 'chai';
import {StopOrder} from '../../src/order/stop.order';
import {createOrderID, expectOrderID} from './order.id.spec';
import {JsonConvert} from 'json2typescript';
import {OrderType} from '../../src/order/order.type';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {OrderState} from '../../src/order/order.state';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {TimeInForce} from '../../src/order/time.in.force';
import {OrderPositionFill} from '../../src/order/order.position.fill';
import {OrderTriggerCondition} from '../../src/order/order.trigger.condition';
import {
  createTakeProfitDetails,
  expectTakeProfitDetails,
} from '../transaction/take.profit.details.spec';

describe('StopOrder', () => {
  it('test setter and getter', () => {
    const stopOrder: StopOrder = createStopOrder();
    expectStopOrder(stopOrder);
  });

  it('test copy', () => {
    const stopOrder: StopOrder = createStopOrder();
    const copyStopOrder: StopOrder = stopOrder.copy();
    expectStopOrder(copyStopOrder);
    expect(copyStopOrder).to.be.deep.equal(stopOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const stopOrderToJson: StopOrder = createStopOrder();
    const json: string = jsonConvert.serializeObject(stopOrderToJson);
    console.log('from class to json: ', json);
    const stopOrderFromJson: StopOrder = jsonConvert.deserializeObject(
      json,
      StopOrder
    );
    console.log('\nfrom json to class: ', stopOrderFromJson);
    expectStopOrder(stopOrderFromJson);
    expect(stopOrderFromJson).to.be.deep.equal(stopOrderToJson);
  });
});

export const createStopOrder = () =>
  new StopOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions())
    .setInstrument(createInstrumentName())
    .setUnits(createDecimalNumber())
    .setPrice(createPriceValue())
    .setPriceBound(createPriceValue())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setPositionFill(OrderPositionFill.OPEN_ONLY)
    .setTriggerCondition(OrderTriggerCondition.ASK)
    .setTakeProfitOnFill(createTakeProfitDetails());

export const expectStopOrder = (order: StopOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.STOP);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectInstrumentName(order.getInstrument());
  expectDecimalNumber(order.getUnits());
  expectPriceValue(order.getPrice());
  expectPriceValue(order.getPriceBound());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(order.getGtdTime());
  expect(order.getPositionFill()).to.be.equal(OrderPositionFill.OPEN_ONLY);
  expect(order.getTriggerCondition()).to.be.equal(OrderTriggerCondition.ASK);
  expectTakeProfitDetails(order.getTakeProfitOnFill());
};
