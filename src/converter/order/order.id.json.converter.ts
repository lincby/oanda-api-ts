import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {OrderID} from '../../order/order.id';

@JsonConverter
export class OrderIdJsonConverter implements JsonCustomConvert<OrderID> {
  serialize(orderID: OrderID): string {
    return orderID.getValue();
  }

  deserialize(orderID: string): OrderID {
    return new OrderID(orderID);
  }
}
