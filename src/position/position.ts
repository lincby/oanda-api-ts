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
  @JsonProperty('marginUsed', AccountUnitsJsonConverter, true)
  private marginUsed: AccountUnits = new AccountUnits('');
  @JsonProperty('resettablePL', AccountUnitsJsonConverter, true)
  private resettablePL: AccountUnits = new AccountUnits('');
  @JsonProperty('financing', AccountUnitsJsonConverter, true)
  private financing: AccountUnits = new AccountUnits('');

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

  setMarginUsed(marginUsed: AccountUnits | Decimal | string): Position {
    this.marginUsed = PrimitiveUtils.accountUnitValue(marginUsed);
    return this;
  }

  getMarginUsed(): AccountUnits {
    return this.marginUsed.copy();
  }

  setResettablePL(resettablePL: AccountUnits | Decimal | string): Position {
    this.resettablePL = PrimitiveUtils.accountUnitValue(resettablePL);
    return this;
  }

  getResettablePL(): AccountUnits {
    return this.resettablePL.copy();
  }

  setFinancing(financing: AccountUnits | Decimal | string): Position {
    this.financing = PrimitiveUtils.accountUnitValue(financing);
    return this;
  }

  getFinancing(): AccountUnits {
    return this.financing.copy();
  }

  copy(): Position {
    return new Position()
      .setInstrument(this.instrument.copy())
      .setPl(this.pl.copy())
      .setUnrealizedPL(this.unrealizedPL.copy())
      .setMarginUsed(this.marginUsed.copy())
      .setResettablePL(this.resettablePL.copy())
      .setFinancing(this.financing.copy());
  }
}
