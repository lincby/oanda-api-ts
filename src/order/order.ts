import {OrderID} from './order.id';
import {DateTime} from '../primitives/date.time';
import {OrderType} from './order.type';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {MarketOrder} from './market.order';
import {FixedPriceOrder} from './fixed.price.order';
import {LimitOrder} from './limit.order';
import {StopOrder} from './stop.order';
import {MarketIfTouchedOrder} from './market.if.touched.order';

export interface Order {
  setId(
    id: OrderID
  ):
    | MarketOrder
    | FixedPriceOrder
    | LimitOrder
    | StopOrder
    | MarketIfTouchedOrder;
  getId(): OrderID;

  getType(): OrderType;

  setCreateTime(
    createTime: DateTime
  ):
    | MarketOrder
    | FixedPriceOrder
    | LimitOrder
    | StopOrder
    | MarketIfTouchedOrder;
  getCreateTime(): DateTime;

  setState(
    state: OrderState
  ):
    | MarketOrder
    | FixedPriceOrder
    | LimitOrder
    | StopOrder
    | MarketIfTouchedOrder;
  getState(): OrderState;

  setClientExtensions(
    clientExtensions: ClientExtensions
  ):
    | MarketOrder
    | FixedPriceOrder
    | LimitOrder
    | StopOrder
    | MarketIfTouchedOrder;
  getClientExtensions(): ClientExtensions;
}
