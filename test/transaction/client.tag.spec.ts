import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {ClientTag} from '../../src/transaction/client.tag';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('ClientTag', () => {
  it('test constructor and getter', () => {
    const tag: ClientTag = createClientTag();
    expectClientTag(tag);
  });

  it('test copy', () => {
    const tag: ClientTag = createClientTag();
    const copyTag: ClientTag = tag.copy();
    expect(copyTag).to.be.deep.equal(tag);
  });
});

export const createClientTag = () => new ClientTag(STRING_TEST_VALUE);

export const expectClientTag = (tag: ClientTag) =>
  expect(tag.getValue()).to.be.equal(STRING_TEST_VALUE);
