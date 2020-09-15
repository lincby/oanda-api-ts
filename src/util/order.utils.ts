import {OrderID} from '../order/order.id';

export class OrderUtils {
  static orderIdValue = (orderId: OrderID | string) => {
    if (orderId instanceof OrderID) {
      return orderId.copy();
    }
    return new OrderID(orderId);
  };
}
