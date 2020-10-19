import {TransactionID} from '../transaction/transaction.id';

export class TransactionIdUtils {
  static transactionIdValue = (src: TransactionID | string): TransactionID => {
    if (src instanceof TransactionID) {
      return src.copy();
    } else {
      return new TransactionID(src);
    }
  };
}
