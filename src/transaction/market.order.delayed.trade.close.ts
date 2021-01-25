import {JsonObject, JsonProperty} from 'json2typescript';
import {TradeID} from '../trade/trade.id';
import {TradeIdJsonConverter} from '../converter/trade/trade.id.json.converter';
import {TransactionID} from './transaction.id';
import {TransactionIdJsonConverter} from '../converter/transaction/transaction.id.json.converter';
import {TradeIdUtils} from '../util/trade.id.utils';

@JsonObject('MarketOrderDelayedTradeClose')
export class MarketOrderDelayedTradeClose {
  @JsonProperty('tradeID', TradeIdJsonConverter, true)
  private tradeID: TradeID = new TradeID('');
  @JsonProperty('clientTradeID', TradeIdJsonConverter, true)
  private clientTradeID: TradeID = new TradeID('');
  @JsonProperty('sourceTransactionID', TransactionIdJsonConverter, true)
  private sourceTransactionID: TransactionID = new TransactionID('');

  setTradeID(tradeID: TradeID | string): MarketOrderDelayedTradeClose {
    this.tradeID = TradeIdUtils.tradeIdValue(tradeID);
    return this;
  }

  getTradeID(): TradeID {
    return this.tradeID.copy();
  }

  setClientTradeID(
    clientTradeID: TradeID | string
  ): MarketOrderDelayedTradeClose {
    this.clientTradeID = TradeIdUtils.tradeIdValue(clientTradeID);
    return this;
  }

  getClientTradeID(): TradeID {
    return this.clientTradeID.copy();
  }

  setSourceTransactionID(
    sourceTransactionID: TransactionID | string
  ): MarketOrderDelayedTradeClose {
    if (sourceTransactionID instanceof TransactionID) {
      this.sourceTransactionID = sourceTransactionID.copy();
    } else {
      this.sourceTransactionID = new TransactionID(sourceTransactionID);
    }
    return this;
  }

  getSourceTransactionID(): TransactionID {
    return this.sourceTransactionID.copy();
  }

  copy(): MarketOrderDelayedTradeClose {
    return new MarketOrderDelayedTradeClose()
      .setTradeID(this.tradeID.copy())
      .setClientTradeID(this.clientTradeID.copy())
      .setSourceTransactionID(this.sourceTransactionID.copy());
  }
}
