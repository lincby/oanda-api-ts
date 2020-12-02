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
import {TimeInForce} from '../../src/order/time.in.force';
import {OrderPositionFill} from '../../src/order/order.position.fill';
import {OrderTriggerCondition} from '../../src/order/order.trigger.condition';
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
    console.log('to json:', json);
    const marketIfTouchedOrderFromJson: MarketIfTouchedOrder = jsonConvert.deserializeObject(
      json,
      MarketIfTouchedOrder
    );
    console.log('\nfrom json:', marketIfTouchedOrderFromJson);
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
    .setClientExtensions(createClientExtensions())
    .setInstrument(createInstrumentName())
    .setUnits(createDecimalNumber())
    .setPrice(createPriceValue())
    .setPriceBound(createPriceValue())
    .setTimeInForce(TimeInForce.GFD)
    .setGtdTime(createDateTime())
    .setPositionFill(OrderPositionFill.OPEN_ONLY)
    .setTriggerCondition(OrderTriggerCondition.ASK)
    .setInitialMarketPrice(createPriceValue())
    .setTakeProfitOnFill(createTakeProfitDetails())
    .setStopLossOnFill(createStopLossDetails())
    .setGuaranteedStopLossDetails(createGuaranteedStopLossDetails())
    .setTrailingStopLossOnFill(createTrailingStopLossDetails())
    .setTradeClientExtensions(createClientExtensions());

export const expectMarketIfTouchedOrder = (order: MarketIfTouchedOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.MARKET_IF_TOUCHED);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectInstrumentName(order.getInstrument());
  expectDecimalNumber(order.getUnits());
  expectPriceValue(order.getPrice());
  expectPriceValue(order.getPriceBound());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectDateTime(order.getGtdTime());
  expect(order.getPositionFill()).to.be.equal(OrderPositionFill.OPEN_ONLY);
  expect(order.getTriggerCondition()).to.be.equal(OrderTriggerCondition.ASK);
  expectPriceValue(order.getInitialMarketPrice());
  expectTakeProfitDetails(order.getTakeProfitOnFill());
  expectStopLossDetails(order.getStopLossOnFill());
  expectGuaranteedStopLossDetails(order.getGuaranteedStopLossDetails());
  expectTrailingStopLossDetails(order.getTrailingStopLossOnFill());
  expectClientExtensions(order.getTradeClientExtensions());
};
