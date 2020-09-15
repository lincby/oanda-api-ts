import {StringPrimitive} from '../primitives/string.primitive';

export class OrderID extends StringPrimitive {
  constructor(id: OrderID | string) {
    if (id instanceof OrderID) {
      super(id.getValue());
    } else {
      super(id);
    }
  }

  copy(): OrderID {
    return new OrderID(super.getValue());
  }
}
