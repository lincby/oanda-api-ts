import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {AccountID} from '../../account/account.id';

@JsonConverter
export class AccountIdJsonConverter implements JsonCustomConvert<AccountID> {
  serialize(accountID: AccountID): string {
    return accountID.getValue();
  }

  deserialize(accountID: string): AccountID {
    return new AccountID(accountID);
  }
}
