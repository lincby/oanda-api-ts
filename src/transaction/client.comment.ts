import {StringPrimitive} from '../primitives/string.primitive';

export class ClientComment extends StringPrimitive {
  constructor(comment: ClientComment | string) {
    if (comment instanceof ClientComment) {
      super(comment.getValue());
    } else {
      super(comment);
    }
  }

  copy(): ClientComment {
    return new ClientComment(super.getValue());
  }
}
