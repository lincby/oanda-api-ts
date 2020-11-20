import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MarketIfTouchedOrder} from '../../src/order/market.if.touched.order';
import {OrderType} from '../../src/order/order.type';
import {OrderState} from '../../src/order/order.state';
import {JsonConvert} from 'json2typescript';
import {createOrderID, expectOrderID} from './order.id.spec';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';

describe('MarketIfTouchedOrder', () => {
  it('test setter and getter', () => {
    const marketIfTouchedOrder: MarketIfTouchedOrder = createMarketIfTouchedOrder();
    expectMarketIfTouchedOrder(marketIfTouchedOrder);
  });

  it('test copy', () => {
    const marketIfTouchedOrder: MarketIfTouchedOrder = createMarketIfTouchedOrder();
    const copyMarketIfTouchedOrder: MarketIfTouchedOrder = marketIfTouchedOrder.copy();
    expectMarketIfTouchedOrder(copyMarketIfTouchedOrder);
    expect(copyMarketIfTouchedOrder).to.be.deep.equal(marketIfTouchedOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const marketIfTouchedOrderToJson: MarketIfTouchedOrder = createMarketIfTouchedOrder();
    const json: string = jsonConvert.serializeObject(
      marketIfTouchedOrderToJson
    );
    console.log('to json:', json)
    const marketIfTouchedOrderFromJson: MarketIfTouchedOrder = jsonConvert.deserializeObject(
      json,
      MarketIfTouchedOrder
    );
    console.log('\nfrom json:', marketIfTouchedOrderFromJson)
    expectMarketIfTouchedOrder(marketIfTouchedOrderFromJson);
    expect(marketIfTouchedOrderToJson).to.be.deep.equal(
      marketIfTouchedOrderFromJson
    );
  });
});

export const createMarketIfTouchedOrder = () =>
  new MarketIfTouchedOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions());

export const expectMarketIfTouchedOrder = (order: MarketIfTouchedOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.MARKET_IF_TOUCHED);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
};
