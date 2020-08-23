import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {DateTime} from '../primitives/date.time';

@JsonConverter
export class DateTimeJsonConverter implements JsonCustomConvert<DateTime> {
  serialize(dateTime: DateTime): string {
    return dateTime.getValue();
  }

  deserialize(dateTime: string): DateTime {
    return new DateTime(dateTime);
  }
}
