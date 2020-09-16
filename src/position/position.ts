import {JsonObject, JsonProperty} from 'json2typescript';
import {InstrumentName} from '../primitives/instrument.name';
import {InstrumentNameJsonConverter} from '../converter/primitives/instrument.name.json.converter';
import {PrimitiveUtils} from '../util/primitive.utils';
import {AccountUnits} from '../primitives/account.units';
import {AccountUnitsJsonConverter} from '../converter/primitives/account.units.json.converter';
import Decimal from 'decimal.js';

@JsonObject('Position')
export class Position {
  @JsonProperty('instrument', InstrumentNameJsonConverter, true)
  private instrument: InstrumentName = new InstrumentName('');
  @JsonProperty('pl', AccountUnitsJsonConverter, true)
  private pl: AccountUnits = new AccountUnits('');
  @JsonProperty('unrealizedPL', AccountUnitsJsonConverter, true)
  private unrealizedPL: AccountUnits = new AccountUnits('');

  setInstrument(instrument: InstrumentName | string): Position {
    this.instrument = PrimitiveUtils.instrumentNameValue(instrument);
    return this;
  }

  getInstrument(): InstrumentName {
    return this.instrument.copy();
  }

  setPl(pl: AccountUnits | Decimal | string): Position {
    this.pl = PrimitiveUtils.accountUnitValue(pl);
    return this;
  }

  getPl(): AccountUnits {
    return this.pl.copy();
  }

  setUnrealizedPL(unrealizedPL: AccountUnits | Decimal | string): Position {
    this.unrealizedPL = PrimitiveUtils.accountUnitValue(unrealizedPL);
    return this;
  }

  getUnrealizedPL(): AccountUnits {
    return this.unrealizedPL.copy();
  }

  copy(): Position {
    return new Position()
      .setInstrument(this.instrument.copy())
      .setPl(this.pl.copy())
      .setUnrealizedPL(this.unrealizedPL.copy());
  }
}
