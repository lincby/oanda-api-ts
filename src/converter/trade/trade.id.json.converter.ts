import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {TradeID} from '../../trade/trade.id';

@JsonConverter
export class TradeIdJsonConverter implements JsonCustomConvert<TradeID> {
  serialize(tradeID: TradeID): string {
    return tradeID.getValue();
  }

  deserialize(tradeID: string): TradeID {
    return new TradeID(tradeID);
  }
}
