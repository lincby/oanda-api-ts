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
        const stopOrderFromJson: StopOrder = jsonConvert.deserializeObject(
            json,
            StopOrder
        );
        expectStopOrder(stopOrderFromJson);
        expect(stopOrderFromJson).to.be.deep.equal(stopOrderToJson);
    });
});

export const createStopOrder = () =>
    new StopOrder()
        .setId(createOrderID())
        .setCreateTime(createDateTime())
        .setState(OrderState.FILLED)
        .setClientExtensions(createClientExtensions());

export const expectStopOrder = (order: StopOrder) => {
    expectOrderID(order.getId());
    expect(order.getType()).to.be.equal(OrderType.STOP);
    expectDateTime(order.getCreateTime());
    expect(order.getState()).to.be.equal(OrderState.FILLED);
    expectClientExtensions(order.getClientExtensions());
}
