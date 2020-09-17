import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {TransactionID} from '../../transaction/transaction.id';

@JsonConverter
export class TransactionIdArrayJsonConverter
  implements JsonCustomConvert<TransactionID[]> {
  serialize(transactionIDs: TransactionID[]): string[] {
    const serializedTransactionIDs = new Array<string>();
    transactionIDs.forEach(item =>
      serializedTransactionIDs.push(item.getValue())
    );
    return serializedTransactionIDs;
  }

  deserialize(transactionIDs: string[]): TransactionID[] {
    const deserializedTransactionIDs = new Array<TransactionID>();
    transactionIDs.forEach(item =>
      deserializedTransactionIDs.push(new TransactionID(item))
    );
    return deserializedTransactionIDs;
  }
}
