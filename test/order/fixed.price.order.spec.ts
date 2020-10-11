import {describe, it} from 'mocha';
import {expect} from 'chai';
import {FixedPriceOrder} from '../../src/order/fixed.price.order';
import {createOrderID, expectOrderID} from './order.id.spec';
import {JsonConvert} from 'json2typescript';
import {OrderType} from '../../src/order/order.type';
import {createDateTime, expectDateTime} from '../primitives/date.time.spec';
import {OrderState} from '../../src/order/order.state';
import {
  createClientExtensions,
  expectClientExtensions,
} from '../transaction/client.extensions.spec';

describe('FixedPriceOrder', () => {
  it('test setter and getter', () => {
    const fixedPriceOrder: FixedPriceOrder = createFixedPriceOrder();
    expectFixedPriceOrder(fixedPriceOrder);
  });

  it('test copy', () => {
    const fixedPriceOrder: FixedPriceOrder = createFixedPriceOrder();
    const copyFixedPriceOrder: FixedPriceOrder = fixedPriceOrder.copy();
    expectFixedPriceOrder(copyFixedPriceOrder);
    expect(copyFixedPriceOrder).to.be.deep.equal(fixedPriceOrder);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const fixedPriceOrderToJson: FixedPriceOrder = createFixedPriceOrder();
    const json: string = jsonConvert.serializeObject(fixedPriceOrderToJson);
    //console.log('from class to json: ', json);
    const fixedPriceOrderFromJson: FixedPriceOrder = jsonConvert.deserializeObject(
      json,
      FixedPriceOrder
    );
    //console.log('from json to class: ', fixedPriceOrderFromJson);
    expectFixedPriceOrder(fixedPriceOrderFromJson);
    expect(fixedPriceOrderFromJson).to.be.deep.equal(fixedPriceOrderToJson);
  });
});

export const createFixedPriceOrder = () =>
  new FixedPriceOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions());

export const expectFixedPriceOrder = (order: FixedPriceOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.FIXED_PRICE);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
};
