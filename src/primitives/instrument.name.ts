import {StringPrimitive} from './string.primitive';

export class InstrumentName extends StringPrimitive {
  constructor(instrumentName: InstrumentName);
  constructor(instrumentName: string);
  constructor(instrumentName: InstrumentName | string) {
    if (instrumentName instanceof InstrumentName) {
      super(instrumentName.getValue());
    } else {
      super(instrumentName);
    }
  }

  copy(): InstrumentName {
    return new InstrumentName(super.getValue());
  }
}
