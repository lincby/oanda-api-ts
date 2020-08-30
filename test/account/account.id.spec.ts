import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {AccountID} from '../../src/account/account.id';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('AccountID', () => {
  it('test constructor and getter', () => {
    const accountID: AccountID = createAccountID();
    expectAccountID(accountID);
  });

  it('test copy', () => {
    const accountID: AccountID = createAccountID();
    const copyAccountID: AccountID = accountID.copy();
    expect(copyAccountID).to.be.deep.equal(accountID);
  });
});

export const createAccountID = () => new AccountID(STRING_TEST_VALUE);

export const expectAccountID = (accountID: AccountID) =>
  expect(accountID.getValue()).to.be.equal(STRING_TEST_VALUE);
