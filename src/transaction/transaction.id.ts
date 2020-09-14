import {StringPrimitive} from '../primitives/string.primitive';

export class TransactionID extends StringPrimitive {
  constructor(transactionID: TransactionID | string) {
    if (transactionID instanceof TransactionID) {
      super(transactionID.getValue());
    } else {
      super(transactionID);
    }
  }

  copy(): TransactionID {
    return new TransactionID(super.getValue());
  }
}
