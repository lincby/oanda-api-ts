import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {TransactionID} from '../../transaction/transaction.id';

@JsonConverter
export class TransactionIdJsonConverter
  implements JsonCustomConvert<TransactionID> {
  serialize(transactionID: TransactionID): string {
    return transactionID.getValue();
  }

  deserialize(transactionID: string): TransactionID {
    return new TransactionID(transactionID);
  }
}
