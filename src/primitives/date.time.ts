import {StringPrimitive} from './string.primitive';

export class DateTime extends StringPrimitive {
  constructor(dateTime: DateTime);
  constructor(dateTime: string);
  constructor(dateTime: DateTime | string) {
    if (dateTime instanceof DateTime) {
      super(dateTime.getValue());
    } else {
      super(dateTime);
    }
  }

  copy(): DateTime {
    return new DateTime(super.getValue());
  }
}
