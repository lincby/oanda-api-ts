import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {ClientComment} from '../../transaction/client.comment';

@JsonConverter
export class ClientCommentJsonConverter
  implements JsonCustomConvert<ClientComment> {
  serialize(comment: ClientComment): string {
    return comment.getValue();
  }

  deserialize(comment: string): ClientComment {
    return new ClientComment(comment);
  }
}
