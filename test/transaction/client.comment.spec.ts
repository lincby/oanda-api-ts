import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {ClientComment} from '../../src/transaction/client.comment';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('ClientComment', () => {
  it('test constructor and getter', () => {
    const comment: ClientComment = createClientComment();
    expectClientComment(comment);
  });

  it('test copy', () => {
    const comment: ClientComment = createClientComment();
    const copyComment: ClientComment = comment.copy();
    expect(copyComment).to.be.deep.equal(comment);
  });
});

export const createClientComment = () => new ClientComment(STRING_TEST_VALUE);

export const expectClientComment = (comment: ClientComment) =>
  expect(comment.getValue()).to.be.equal(STRING_TEST_VALUE);
