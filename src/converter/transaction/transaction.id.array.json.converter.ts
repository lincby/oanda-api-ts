import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {TransactionID} from '../../transaction/transaction.id';

@JsonConverter
export class TransactionIdArrayJsonConverter
  implements JsonCustomConvert<TransactionID[]> {
  serialize(transactionIDs: TransactionID[]): string[] {
    const serializedClosingTransactionIDs = new Array<string>();
    transactionIDs.forEach(item =>
      serializedClosingTransactionIDs.push(item.getValue())
    );
    return serializedClosingTransactionIDs;
  }

  deserialize(transactionIDs: string[]): TransactionID[] {
    const deserializedClosingTransactionIDs = new Array<TransactionID>();
    transactionIDs.forEach(item =>
      deserializedClosingTransactionIDs.push(new TransactionID(item))
    );
    return deserializedClosingTransactionIDs;
  }
}
