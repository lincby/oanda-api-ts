import {TradeID} from './trade.id';
import {TradeIdJsonConverter} from './../converter/trade/trade.id.json.converter';
import {JsonObject, JsonProperty} from 'json2typescript';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {PriceValue} from '../price_common/price.value';
import {PriceValueJsonConverter} from '../converter/price_common/price.value.json.converter';
import Decimal from 'decimal.js';
import {PriceCommonUtils} from '../util/price.common.utils';

@JsonObject('TradeSummary')
export class TradeSummary {
  @JsonProperty('id', TradeIdJsonConverter, false)
  private id: TradeID = new TradeID('');
  @JsonProperty('instrumentName', InstrumentNameJsonConverter, false)
  private instrumentName: InstrumentName = new InstrumentName('');
  @JsonProperty('price', PriceValueJsonConverter, false)
  private price: PriceValue = new PriceValue('');

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

  setPrice(priceValue: PriceValue): TradeSummary;
  setPrice(priceValue: Decimal): TradeSummary;
  setPrice(priceValue: string): TradeSummary;
  setPrice(priceValue: PriceValue | Decimal | string): TradeSummary {
    this.price = PriceCommonUtils.priceValue(priceValue);
    return this;
  }

  getPrice(): PriceValue {
    return this.price.copy();
  }

  copy(): TradeSummary {
    return new TradeSummary()
      .setTradeID(this.id.copy())
      .setInstrumentName(this.instrumentName.copy())
      .setPrice(this.price.copy());
  }
}
