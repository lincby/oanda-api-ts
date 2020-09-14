import {StringPrimitive} from '../primitives/string.primitive';

export class TradeID extends StringPrimitive {
  constructor(tradeID: TradeID | string) {
    if (tradeID instanceof TradeID) {
      super(tradeID.getValue());
    } else {
      super(tradeID);
    }
  }

  copy(): TradeID {
    return new TradeID(super.getValue());
  }
}
