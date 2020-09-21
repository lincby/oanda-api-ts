import {JsonObject, JsonProperty} from 'json2typescript';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';

@JsonObject('MarketOrderPositionCloseout')
export class MarketOrderPositionCloseout {
  @JsonProperty('instrument', InstrumentNameJsonConverter, true)
  private instrument: InstrumentName = new InstrumentName('');
  @JsonProperty('units', String, true)
  private units = '';

  setInstrument(
    instrumentName: InstrumentName | string
  ): MarketOrderPositionCloseout {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrumentName);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setUnits(units: string): MarketOrderPositionCloseout {
    this.units = units;
    return this;
  }

  getUnits(): string {
    return this.units;
  }

  copy(): MarketOrderPositionCloseout {
    return new MarketOrderPositionCloseout()
      .setInstrument(this.instrument.copy())
      .setUnits(this.units);
  }
}
