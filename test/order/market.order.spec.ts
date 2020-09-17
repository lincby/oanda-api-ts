import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MarketOrder} from '../../src/order/market.order';
import {createOrderID, expectOrderID} from './order.id.spec';
import {JsonConvert} from 'json2typescript';
import {OrderType} from '../../src/order/order.type';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {OrderState} from '../../src/order/order.state';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';

describe('MarketOrder', () => {
  it('test setter and getter', () => {
    const marketOrder: MarketOrder = createMarketOrder();
    expectMarketOrder(marketOrder);
  });

  it('test copy', () => {
    const marketOrder: MarketOrder = createMarketOrder();
    const copyMarketOrder: MarketOrder = marketOrder.copy();
    expectMarketOrder(copyMarketOrder);
    expect(copyMarketOrder).to.be.deep.equal(marketOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketOrderToJson: MarketOrder = createMarketOrder();
    const json: string = jsonConvert.serializeObject(marketOrderToJson);
    console.log('from class to json: ', json);
    const marketOrderFromJson: MarketOrder = jsonConvert.deserializeObject(
      json,
      MarketOrder
    );
    console.log('from json to class: ', marketOrderFromJson);
    expectMarketOrder(marketOrderFromJson);
    expect(marketOrderFromJson).to.be.deep.equal(marketOrderToJson);
  });
});

export const createMarketOrder = () =>
  new MarketOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions());

export const expectMarketOrder = (order: MarketOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.MARKET);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
};
