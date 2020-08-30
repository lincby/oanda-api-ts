import {TradeID} from './trade.id';
import {TradeIdJsonConverter} from './../converter/trade/trade.id.json.converter';
import {JsonObject, JsonProperty} from 'json2typescript';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {PrimitiveUtils} from "..";

@JsonObject('TradeSummary')
export class TradeSummary {
  @JsonProperty('id', TradeIdJsonConverter, false)
  private id: TradeID = new TradeID('');
  @JsonProperty('instrumentName', InstrumentNameJsonConverter, false)
  private instrumentName: InstrumentName = new InstrumentName('');

  setTradeID(id: TradeID): TradeSummary;
  setTradeID(id: string): TradeSummary;
  setTradeID(id: TradeID | string): TradeSummary {
    if (id instanceof TradeID) {
      this.id = id.copy();
    } else {
      this.id = new TradeID(id);
    }
    return this;
  }

  getTradeID(): TradeID {
    return this.id.copy();
  }

  setInstrumentName(instrumentName: InstrumentName): TradeSummary;
  setInstrumentName(instrumentName: string): TradeSummary;
  setInstrumentName(instrumentName: InstrumentName | string): TradeSummary {
    this.instrumentName = PrimitiveUtils.instrumentNameValue(instrumentName);
    return this;
  }

  getInstrumentName(): InstrumentName {
    return this.instrumentName.copy();
  }

  copy(): TradeSummary {
    return new TradeSummary()
        .setTradeID(this.id.copy())
        .setInstrumentName(this.instrumentName.copy());
  }
}
