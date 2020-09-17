import {OrderID} from './order.id';
import {DateTime} from '../primitives/date.time';
import {OrderType} from './order.type';
import {OrderState} from './order.state';
import {ClientExtensions} from '../transaction/client.extensions';
import {MarketOrder} from './market.order';

export interface Order {
  setId(id: OrderID): MarketOrder;
  getId(): OrderID;

  getType(): OrderType;

  setCreateTime(createTime: DateTime): MarketOrder;
  getCreateTime(): DateTime;

  setState(state: OrderState): MarketOrder;
  getState(): OrderState;

  setClientExtensions(clientExtensions: ClientExtensions): MarketOrder;
  getClientExtensions(): ClientExtensions;
}
