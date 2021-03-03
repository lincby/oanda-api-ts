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
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';
import {createClientID, expectClientID} from '../transaction/client.id.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {OrderTriggerCondition, TimeInForce} from '../../src';
import {
  createTransactionID,
  expectTransactionID,
} from '../transaction/transaction.id.spec';

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
    .setClientExtensions(createClientExtensions())
    .setTradeID(createTradeID())
    .setClientTradeID(createClientID())
    .setPrice(createPriceValue())
    .setDistance(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setTriggerCondition(OrderTriggerCondition.ASK)
    .setFillingTransactionID(createTransactionID())
    .setFilledTime(createDateTime())
    .setTradeOpenedID(createTradeID())
    .setTradeReducedID(createTradeID())
    .setTradeClosedIDs([createTradeID(), createTradeID()])
    .setCancellingTransactionID(createTransactionID())
    .setCancelledTime(createDateTime())
    .setReplacesOrderID(createOrderID())
    .setReplacedByOrderID(createOrderID());

export const expectStopLossOrder = (order: StopLossOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.STOP_LOSS);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectTradeID(order.getTradeID());
  expectClientID(order.getClientTradeID());
  expectPriceValue(order.getPrice());
  expectDecimalNumber(order.getDistance());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(order.getGtdTime());
  expect(order.getTriggerCondition()).to.be.equal(OrderTriggerCondition.ASK);
  expectTransactionID(order.getFillingTransactionID());
  expectDateTime(order.getFilledTime());
  expectTradeID(order.getTradeOpenedID());
  expectTradeID(order.getTradeReducedID());
  expectTradeID(order.getTradeClosedIDs()[0]);
  expectTradeID(order.getTradeClosedIDs()[1]);
  expectTransactionID(order.getCancellingTransactionID());
  expectDateTime(order.getCancelledTime());
  expectOrderID(order.getReplacesOrderID());
  expectOrderID(order.getReplacedByOrderID());
};
