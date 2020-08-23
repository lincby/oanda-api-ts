import {StringPrimitive} from '../primitives/string.primitive';

export class AccountID extends StringPrimitive {
  constructor(accountID: AccountID);
  constructor(accountID: string);
  constructor(accountID: AccountID | string) {
    if (accountID instanceof AccountID) {
      super(accountID.getValue());
    } else {
      super(accountID);
    }
  }

  copy(): AccountID {
    return new AccountID(super.getValue());
  }
}
