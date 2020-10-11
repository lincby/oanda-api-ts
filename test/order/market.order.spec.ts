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
import {
  createInstrumentName,
  expectInstrumentName,
} from '../primitives/instrument.name.spec';
import {
  createDecimalNumber,
  expectDecimalNumber,
} from '../primitives/decimal.number.spec';
import {TimeInForce} from '../../src/order/time.in.force';
import {
  createPriceValue,
  expectPriceValue,
} from '../price_common/price.value.spec';
import {OrderPositionFill} from '../../src/order/order.position.fill';
import {
  createMarketOrderTradeClose,
  expectMarketOrderTradeClose,
} from '../transaction/market.order.trade.close.spec';
import {
  createMarketOrderPositionCloseout,
  expectMarketOrderPositionCloseout,
} from '../transaction/market.order.position.closeout.spec';
import {
  createMarketOrderMarginCloseout,
  expectMarketOrderMarginCloseout,
} from '../transaction/market.order.margin.closeout.spec';
import {
  createMarketOrderDelayedTradeClose,
  expectMarketOrderDelayedTradeClose,
} from '../transaction/market.order.delayed.trade.close.spec';
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
    .setClientExtensions(createClientExtensions())
    .setInstrument(createInstrumentName())
    .setUnits(createDecimalNumber())
    .setTimeInForce(TimeInForce.GFD)
    .setPriceBound(createPriceValue())
    .setPositionFill(OrderPositionFill.OPEN_ONLY)
    .setTradeClose(createMarketOrderTradeClose())
    .setLongPositionCloseout(createMarketOrderPositionCloseout())
    .setShortPositionCloseout(createMarketOrderPositionCloseout())
    .setMarginCloseout(createMarketOrderMarginCloseout())
    .setDelayedTradeClose(createMarketOrderDelayedTradeClose())
    .setTakeProfitOnFill(createTakeProfitDetails())
    .setStopLossOnFill(createStopLossDetails())
    .setGuaranteedStopLossDetails(createGuaranteedStopLossDetails());

export const expectMarketOrder = (order: MarketOrder) => {
  expectOrderID(order.getId());
  expect(order.getType()).to.be.equal(OrderType.MARKET);
  expectDateTime(order.getCreateTime());
  expect(order.getState()).to.be.equal(OrderState.FILLED);
  expectClientExtensions(order.getClientExtensions());
  expectInstrumentName(order.getInstrument());
  expectDecimalNumber(order.getUnits());
  expect(order.getTimeInForce()).to.be.equal(TimeInForce.GFD);
  expectPriceValue(order.getPriceBound());
  expect(order.getPositionFill()).to.be.equal(OrderPositionFill.OPEN_ONLY);
  expectMarketOrderTradeClose(order.getTradeClose());
  expectMarketOrderPositionCloseout(order.getLongPositionCloseout());
  expectMarketOrderPositionCloseout(order.getShortPositionCloseout());
  expectMarketOrderMarginCloseout(order.getMarginCloseout());
  expectMarketOrderDelayedTradeClose(order.getDelayedTradeClose());
  expectTakeProfitDetails(order.getTakeProfitOnFill());
  expectStopLossDetails(order.getStopLossOnFill());
  expectGuaranteedStopLossDetails(order.getGuaranteedStopLossDetails());
};
