import {describe, it} from 'mocha';
import {expect} from 'chai';
import {LimitOrder} from '../../src/order/limit.order';
import {OrderType} from '../../src/order/order.type';
import {OrderState} from '../../src/order/order.state';
import {JsonConvert} from 'json2typescript';
import {createOrderID, expectOrderID} from './order.id.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
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
import {OrderPositionFill, TimeInForce} from '../../src';
import {OrderTriggerCondition} from '../../src/order/order.trigger.condition';
import {
  createTakeProfitDetails,
  expectTakeProfitDetails,
} from '../transaction/take.profit.details.spec';
import {
  createStopLossDetails,
  expectStopLossDetails,
} from '../transaction/stop.loss.details.spec';

describe('LimitOrder', () => {
  it('test setter and getter', () => {
    const limitOrder: LimitOrder = createLimitOrder();
    expectLimitOrder(limitOrder);
  });

  it('test copy', () => {
    const limitOrder: LimitOrder = createLimitOrder();
    const copyLimitOrder: LimitOrder = limitOrder.copy();
    expectLimitOrder(copyLimitOrder);
    expect(copyLimitOrder).to.be.deep.equal(limitOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const limitOrderToJson: LimitOrder = createLimitOrder();
    const json: string = jsonConvert.serializeObject(limitOrderToJson);
    console.log('to-json:', json);
    const limitOrderFromJson: LimitOrder = jsonConvert.deserializeObject(
      json,
      LimitOrder
    );
    console.log('from-json:', limitOrderFromJson);
    expectLimitOrder(limitOrderFromJson);
    expect(limitOrderToJson).to.be.deep.equal(limitOrderFromJson);
  });
});

export const createLimitOrder = () =>
  new LimitOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions())
    .setInstrument(createInstrumentName())
    .setUnits(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setPositionFill(OrderPositionFill.OPEN_ONLY)
    .setTriggerCondition(OrderTriggerCondition.ASK)
    .setTakeProfitOnFill(createTakeProfitDetails())
    .setStopLossOnFill(createStopLossDetails());

export const expectLimitOrder = (order: LimitOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.LIMIT);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectInstrumentName(order.getInstrument());
  expectDecimalNumber(order.getUnits());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(order.getGtdTime());
  expect(order.getPositionFill()).to.be.equal(OrderPositionFill.OPEN_ONLY);
  expect(order.getTriggerCondition()).to.be.equal(OrderTriggerCondition.ASK);
  expectTakeProfitDetails(order.getTakeProfitOnFill());
  expectStopLossDetails(order.getStopLossOnFill());
};
