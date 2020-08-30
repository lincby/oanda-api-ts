import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {AccountUnits} from '../../primitives/account.units';

@JsonConverter
export class AccountUnitsJsonConverter
  implements JsonCustomConvert<AccountUnits> {
  serialize(accountUnits: AccountUnits): string {
    return accountUnits.getValue();
  }

  deserialize(accountUnits: string): AccountUnits {
    return new AccountUnits(accountUnits);
  }
}
