import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {OrderID} from '../../src/order/order.id';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('OrderID', () => {
  it('test constructor and getter', () => {
    const orderID: OrderID = createOrderID();
    expectOrderID(orderID);
  });

  it('test copy', () => {
    const orderID: OrderID = createOrderID();
    const copyOrderID: OrderID = orderID.copy();
    expect(copyOrderID).to.be.deep.equal(orderID);
  });
});

export const createOrderID = () => new OrderID(STRING_TEST_VALUE);

export const expectOrderID = (orderID: OrderID) =>
  expect(orderID.getValue()).to.be.equal(STRING_TEST_VALUE);
