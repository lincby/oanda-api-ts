import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ClientExtensions} from '../../src/transaction/client.extensions';
import {createClientID, expectClientID} from './client.id.spec';
import {JsonConvert} from 'json2typescript';
import {createClientTag, expectClientTag} from './client.tag.spec';
import {createClientComment, expectClientComment} from './client.comment.spec';

describe('ClientExtensions', () => {
  it('test setter and getter', () => {
    const clientExtensions: ClientExtensions = createClientExtensions();
    expectClientExtensions(clientExtensions);
  });

  it('test copy', () => {
    const clientExtensions: ClientExtensions = createClientExtensions();
    const copyClientExtensions: ClientExtensions = clientExtensions.copy();
    expectClientExtensions(copyClientExtensions);
    expect(copyClientExtensions).to.be.deep.equal(clientExtensions);
  });

  it('test to and from json', () => {
    const jsonConvert: JsonConvert = new JsonConvert();
    const clientExtensionsToJson: ClientExtensions = createClientExtensions();
    const json: string = jsonConvert.serializeObject(clientExtensionsToJson);
    const clientExtensionsFromJson: ClientExtensions = jsonConvert.deserializeObject(
      json,
      ClientExtensions
    );
    expectClientExtensions(clientExtensionsFromJson);
    expect(clientExtensionsFromJson).to.be.deep.equal(clientExtensionsToJson);
  });
});

export const createClientExtensions = () =>
  new ClientExtensions()
    .setId(createClientID())
    .setTag(createClientTag())
    .setComment(createClientComment());

export const expectClientExtensions = (clientExtensions: ClientExtensions) => {
  expectClientID(clientExtensions.getId());
  expectClientTag(clientExtensions.getTag());
  expectClientComment(clientExtensions.getComment());
};
