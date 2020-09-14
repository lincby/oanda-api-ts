import {StringPrimitive} from '../primitives/string.primitive';

export class ClientTag extends StringPrimitive {
  constructor(tag: ClientTag | string) {
    if (tag instanceof ClientTag) {
      super(tag.getValue());
    } else {
      super(tag);
    }
  }

  copy(): ClientTag {
    return new ClientTag(super.getValue());
  }
}
