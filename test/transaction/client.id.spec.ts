import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {ClientID} from '../../src/transaction/client.id';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('ClientID', () => {
  it('test constructor and getter', () => {
    const id: ClientID = createClientID();
    expectClientID(id);
  });

  it('test copy', () => {
    const id: ClientID = createClientID();
    const copyId: ClientID = id.copy();
    expect(copyId).to.be.deep.equal(id);
  });
});

export const createClientID = () => new ClientID(STRING_TEST_VALUE);

export const expectClientID = (id: ClientID) =>
  expect(id.getValue()).to.be.equal(STRING_TEST_VALUE);
