import {describe, it} from 'mocha';
import {expect} from 'chai';
import {JsonConvert} from 'json2typescript';
import {TakeProfitOrder} from '../../src/order/take.profit.order';
import {createOrderID, expectOrderID} from './order.id.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';
import {OrderState} from '../../src/order/order.state';
import {OrderType} from '../../src/order/order.type';
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {OrderTriggerCondition} from '../../src/order/order.trigger.condition';
import {TimeInForce} from '../../src/order/time.in.force';

describe('TakeProfitOrder', () => {
  it('test setter and getter', () => {
    const takeProfitOrder: TakeProfitOrder = createTakeProfitOrder();
    expectTakeProfitOrder(takeProfitOrder);
  });

  it('test copy', () => {
    const takeProfitOrder: TakeProfitOrder = createTakeProfitOrder();
    const copyTakeProfitOrder: TakeProfitOrder = takeProfitOrder.copy();
    expectTakeProfitOrder(copyTakeProfitOrder);
    expect(copyTakeProfitOrder).to.be.deep.equal(takeProfitOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const takeProfitOrderToJson: TakeProfitOrder = createTakeProfitOrder();
    const json: string = jsonConvert.serializeObject(takeProfitOrderToJson);
    const takeProfitOrderFromJson: TakeProfitOrder = jsonConvert.deserializeObject(
      json,
      TakeProfitOrder
    );
    expectTakeProfitOrder(takeProfitOrderFromJson);
    expect(takeProfitOrderToJson).to.be.deep.equal(takeProfitOrderFromJson);
  });
});

export const createTakeProfitOrder = () =>
  new TakeProfitOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions())
    .setTradeID(createTradeID())
    .setClientTradeID(createTradeID())
    .setPrice(createPriceValue())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setTriggerCondition(OrderTriggerCondition.ASK);

export const expectTakeProfitOrder = (order: TakeProfitOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.TAKE_PROFIT);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectTradeID(order.getTradeID());
  expectTradeID(order.getClientTradeID());
  expectPriceValue(order.getPrice());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(order.getGtdTime());
  expect(order.getTriggerCondition()).to.be.equal(OrderTriggerCondition.ASK);
};
