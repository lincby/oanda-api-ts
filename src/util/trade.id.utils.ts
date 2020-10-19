import {TradeID} from '../trade/trade.id';

export class TradeIdUtils {
  static tradeIdValue = (tradeID: TradeID | string) => {
    if (tradeID instanceof TradeID) {
      return tradeID.copy();
    } else {
      return new TradeID(tradeID);
    }
  };

  static tradeIdValues = (tradeIDs: TradeID[] | string[]): TradeID[] => {
    const newTradeIDs = new Array<TradeID>();

    tradeIDs.forEach((item: TradeID | string) => {
      if (item instanceof TradeID) {
        newTradeIDs.push(item.copy());
      } else {
        newTradeIDs.push(new TradeID(item));
      }
    });

    return newTradeIDs;
  };
}
