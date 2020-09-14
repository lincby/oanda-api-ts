import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {ClientTag} from '../../transaction/client.tag';

@JsonConverter
export class ClientTagJsonConverter implements JsonCustomConvert<ClientTag> {
  serialize(tag: ClientTag): string {
    return tag.getValue();
  }

  deserialize(tag: string): ClientTag {
    return new ClientTag(tag);
  }
}
