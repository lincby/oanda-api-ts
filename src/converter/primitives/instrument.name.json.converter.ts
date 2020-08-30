import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {InstrumentName} from '../../primitives/instrument.name';

@JsonConverter
export class InstrumentNameJsonConverter implements JsonCustomConvert<InstrumentName> {
  serialize(instrumentName: InstrumentName): string {
    return instrumentName.getValue();
  }

  deserialize(instrumentName: string): InstrumentName {
    return new InstrumentName(instrumentName);
  }
}
