import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {TradeID} from '../../trade/trade.id';

@JsonConverter
export class TradeIdArrayJsonConverter implements JsonCustomConvert<TradeID[]> {
  serialize(tradeIDs: TradeID[]): string[] {
    const serializedTradeIDs = new Array<string>();
    tradeIDs.forEach(item => serializedTradeIDs.push(item.getValue()));
    return serializedTradeIDs;
  }

  deserialize(transactionIDs: string[]): TradeID[] {
    const deserializedTradeIDs = new Array<TradeID>();
    transactionIDs.forEach(item =>
      deserializedTradeIDs.push(new TradeID(item))
    );
    return deserializedTradeIDs;
  }
}
