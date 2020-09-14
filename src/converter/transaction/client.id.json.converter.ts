import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {ClientID} from '../../transaction/client.id';

@JsonConverter
export class ClientIdJsonConverter implements JsonCustomConvert<ClientID> {
  serialize(id: ClientID): string {
    return id.getValue();
  }

  deserialize(id: string): ClientID {
    return new ClientID(id);
  }
}
