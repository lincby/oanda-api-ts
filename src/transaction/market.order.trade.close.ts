import {JsonObject, JsonProperty} from 'json2typescript';
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';

@JsonObject('MarketOrderTradeClose')
export class MarketOrderTradeClose {
  @JsonProperty('tradeID', TradeIdJsonConverter, true)
  private tradeID: TradeID = new TradeID('');
  @JsonProperty('clientTradeID', String, true)
  private clientTradeID = '';
  @JsonProperty('units', String, true)
  private units = '';

  setTradeID(tradeID: TradeID | string): MarketOrderTradeClose {
    if (tradeID instanceof TradeID) {
      this.tradeID = tradeID.copy();
    } else {
      this.tradeID = new TradeID(tradeID);
    }
    return this;
  }

  getTradeID(): TradeID {
    return this.tradeID.copy();
  }

  setClientTradeID(clientTradeID: string): MarketOrderTradeClose {
    this.clientTradeID = clientTradeID;
    return this;
  }

  getClientTradeID(): string {
    return this.clientTradeID;
  }

  setUnits(units: string): MarketOrderTradeClose {
    this.units = units;
    return this;
  }

  getUnits(): string {
    return this.units;
  }

  copy(): MarketOrderTradeClose {
    return new MarketOrderTradeClose()
      .setTradeID(this.tradeID.copy())
      .setClientTradeID(this.clientTradeID)
      .setUnits(this.units);
  }
}
