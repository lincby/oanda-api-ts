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
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {OrderPositionFill} from '../../src/order/order.position.fill';
import {STRING_TEST_VALUE} from '../test.utils.spec';
import {
  createTakeProfitDetails,
  expectTakeProfitDetails,
} from '../transaction/take.profit.details.spec';
import {
  createStopLossDetails,
  expectStopLossDetails,
} from '../transaction/stop.loss.details.spec';
import {
  createGuaranteedStopLossDetails,
  expectGuaranteedStopLossDetails,
} from '../transaction/guaranteed.stop.loss.details.spec';
import {
  createTrailingStopLossDetails,
  expectTrailingStopLossDetails,
} from '../transaction/trailing.stop.loss.details.spec';
import {
  createTransactionID,
  expectTransactionID,
} from '../transaction/transaction.id.spec';
import {createTradeID, expectTradeID} from '../trade/trade.id.spec';

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
    const fixedPriceOrderFromJson: FixedPriceOrder = jsonConvert.deserializeObject(
      json,
      FixedPriceOrder
    );
    expectFixedPriceOrder(fixedPriceOrderFromJson);
    expect(fixedPriceOrderFromJson).to.be.deep.equal(fixedPriceOrderToJson);
  });
});

export const createFixedPriceOrder = () =>
  new FixedPriceOrder()
    .setId(createOrderID())
    .setCreateTime(createDateTime())
    .setState(OrderState.FILLED)
    .setClientExtensions(createClientExtensions())
    .setInstrument(createInstrumentName())
    .setUnits(createDecimalNumber())
    .setPrice(createPriceValue())
    .setPositionFill(OrderPositionFill.OPEN_ONLY)
    .setTradeState(STRING_TEST_VALUE)
    .setTakeProfitOnFill(createTakeProfitDetails())
    .setStopLossOnFill(createStopLossDetails())
    .setGuaranteedStopLossDetails(createGuaranteedStopLossDetails())
    .setTrailingStopLossOnFill(createTrailingStopLossDetails())
    .setTradeClientExtensions(createClientExtensions())
    .setFillingTransactionID(createTransactionID())
    .setFilledTime(createDateTime())
    .setTradeOpenedID(createTradeID())
    .setTradeReducedID(createTradeID())
    .setTradeClosedIDs([createTradeID(), createTradeID()])
    .setCancellingTransactionID(createTransactionID())
    .setCancelledTime(createDateTime());

export const expectFixedPriceOrder = (order: FixedPriceOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.FIXED_PRICE);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectInstrumentName(order.getInstrument());
  expectDecimalNumber(order.getUnits());
  expectPriceValue(order.getPrice());
  expect(order.getPositionFill()).to.be.equal(OrderPositionFill.OPEN_ONLY);
  expect(order.getTradeState()).to.be.equal(STRING_TEST_VALUE);
  expectTakeProfitDetails(order.getTakeProfitOnFill());
  expectStopLossDetails(order.getStopLossOnFill());
  expectGuaranteedStopLossDetails(order.getGuaranteedStopLossDetails());
  expectTrailingStopLossDetails(order.getTrailingStopLossOnFill());
  expectClientExtensions(order.getTradeClientExtensions());
  expectTransactionID(order.getFillingTransactionID());
  expectDateTime(order.getFilledTime());
  expectTradeID(order.getTradeOpenedID());
  expectTradeID(order.getTradeReducedID());
  expectTradeID(order.getTradeClosedIDs()[0]);
  expectTradeID(order.getTradeClosedIDs()[1]);
  expectTransactionID(order.getCancellingTransactionID());
  expectDateTime(order.getCancelledTime());
};
