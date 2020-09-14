import {StringPrimitive} from '../primitives/string.primitive';

export class ClientID extends StringPrimitive {
  constructor(id: ClientID | string) {
    if (id instanceof ClientID) {
      super(id.getValue());
    } else {
      super(id);
    }
  }

  copy(): ClientID {
    return new ClientID(super.getValue());
  }
}
