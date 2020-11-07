import {OrderID} from './order.id';
import {DateTime} from '../primitives/date.time';
import {OrderType} from './order.type';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {MarketOrder} from './market.order';
import {FixedPriceOrder} from './fixed.price.order';
import {LimitOrder} from './limit.order';

export interface Order {
  setId(id: OrderID): MarketOrder | FixedPriceOrder | LimitOrder;
  getId(): OrderID;

  getType(): OrderType;

  setCreateTime(
    createTime: DateTime
  ): MarketOrder | FixedPriceOrder | LimitOrder;
  getCreateTime(): DateTime;

  setState(state: OrderState): MarketOrder | FixedPriceOrder | LimitOrder;
  getState(): OrderState;

  setClientExtensions(
    clientExtensions: ClientExtensions
  ): MarketOrder | FixedPriceOrder | LimitOrder;
  getClientExtensions(): ClientExtensions;
}
