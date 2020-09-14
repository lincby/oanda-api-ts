import {JsonObject} from 'json2typescript';
import {ClientID} from './client.id';
import {ClientIdJsonConverter} from '../converter/transaction/client.id.json.converter';
import {ClientTagJsonConverter} from '../converter/transaction/client.tag.json.converter';
import {JsonProperty} from 'json2typescript/index';
import {ClientTag} from './client.tag';
import {ClientComment} from './client.comment';
import {ClientCommentJsonConverter} from '../converter/transaction/client.comment.json.converter';

@JsonObject('ClientExtensions')
export class ClientExtensions {
  @JsonProperty('id', ClientIdJsonConverter, true)
  private id: ClientID = new ClientID('');
  @JsonProperty('tag', ClientTagJsonConverter, true)
  private tag: ClientTag = new ClientTag('');
  @JsonProperty('tag', ClientCommentJsonConverter, true)
  private comment: ClientComment = new ClientComment('');

  setId(id: ClientID | string): ClientExtensions {
    if (id instanceof ClientID) {
      this.id = id.copy();
    } else {
      this.id = new ClientID(id);
    }
    return this;
  }

  getId(): ClientID {
    return this.id.copy();
  }

  setTag(tag: ClientTag | string): ClientExtensions {
    if (tag instanceof ClientTag) {
      this.tag = tag.copy();
    } else {
      this.tag = new ClientTag(tag);
    }
    return this;
  }

  getTag(): ClientTag {
    return this.tag.copy();
  }

  setComment(comment: ClientComment | string): ClientExtensions {
    if (comment instanceof ClientComment) {
      this.comment = comment.copy();
    } else {
      this.comment = new ClientComment(comment);
    }
    return this;
  }

  getComment(): ClientComment {
    return this.comment.copy();
  }

  copy(): ClientExtensions {
    return new ClientExtensions()
      .setId(this.id.copy())
      .setTag(this.tag.copy())
      .setComment(this.comment.copy());
  }
}
