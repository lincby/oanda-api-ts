import {describe, it} from 'mocha';
import {expect} from 'chai';
import {GuaranteedStopLossOrder} from '../../src/order/guaranteed.stop.loss.order';
import {OrderType} from '../../src/order/order.type';
import {OrderState} from '../../src/order/order.state';
import {JsonConvert} from 'json2typescript';
import {createOrderID, expectOrderID} from './order.id.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';

describe('GuaranteedStopLossOrder', () => {
  it('test setter and getter', () => {
    const guaranteedStopLossOrder: GuaranteedStopLossOrder = createGuaranteedStopLossOrder();
    expectGuaranteedStopLossOrder(guaranteedStopLossOrder);
  });

  it('test copy', () => {
    const guaranteedStopLossOrder: GuaranteedStopLossOrder = createGuaranteedStopLossOrder();
    const copyGuaranteedStopLossOrder: GuaranteedStopLossOrder = guaranteedStopLossOrder.copy();
    expectGuaranteedStopLossOrder(copyGuaranteedStopLossOrder);
    expect(copyGuaranteedStopLossOrder).to.be.deep.equal(
      guaranteedStopLossOrder
    );
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const guaranteedStopLossOrderToJson: GuaranteedStopLossOrder = createGuaranteedStopLossOrder();
    const json: string = jsonConvert.serializeObject(
      guaranteedStopLossOrderToJson
    );
    console.log('to json:', json);
    const guaranteedStopLossOrderFromJson: GuaranteedStopLossOrder = jsonConvert.deserializeObject(
      json,
      GuaranteedStopLossOrder
    );
    console.log('from json:', guaranteedStopLossOrderFromJson);
    expectGuaranteedStopLossOrder(guaranteedStopLossOrderFromJson);
    expect(guaranteedStopLossOrderToJson).to.be.deep.equal(
      guaranteedStopLossOrderFromJson
    );
  });
});

export const createGuaranteedStopLossOrder = () =>
  new GuaranteedStopLossOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions());

export const expectGuaranteedStopLossOrder = (
  order: GuaranteedStopLossOrder
) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.GUARANTEED_STOP_LOSS);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
};
