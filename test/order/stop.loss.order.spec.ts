import {describe, it} from 'mocha';
import {expect} from 'chai';
import {StopLossOrder} from '../../src/order/stop.loss.order';
import {OrderType} from '../../src/order/order.type';
import {OrderState} from '../../src/order/order.state';
import {JsonConvert} from 'json2typescript';
import {createOrderID, expectOrderID} from './order.id.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';

describe('StopLossOrder', () => {
  it('test setter and getter', () => {
    const stopLossOrder: StopLossOrder = createStopLossOrder();
    expectStopLossOrder(stopLossOrder);
  });

  it('test copy', () => {
    const stopLossOrder: StopLossOrder = createStopLossOrder();
    const copyStopLossOrder: StopLossOrder = stopLossOrder.copy();
    expectStopLossOrder(copyStopLossOrder);
    expect(copyStopLossOrder).to.be.deep.equal(stopLossOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const stopLossOrderToJson: StopLossOrder = createStopLossOrder();
    const json: string = jsonConvert.serializeObject(stopLossOrderToJson);
    console.log('to json:', json);
    const stopLossOrderFromJson: StopLossOrder = jsonConvert.deserializeObject(
      json,
      StopLossOrder
    );
    console.log('from json:', stopLossOrderFromJson);
    expectStopLossOrder(stopLossOrderFromJson);
    expect(stopLossOrderToJson).to.be.deep.equal(stopLossOrderFromJson);
  });
});

export const createStopLossOrder = () =>
  new StopLossOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions());

export const expectStopLossOrder = (order: StopLossOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.STOP_LOSS);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
};
