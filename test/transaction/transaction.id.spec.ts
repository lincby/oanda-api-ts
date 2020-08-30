import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {TransactionID} from '../../src/transaction/transaction.id';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('TransactionID', () => {
  it('test constructor and getter', () => {
    const transactionID: TransactionID = createTransactionID();
    expectTransactionID(transactionID);
  });

  it('test copy', () => {
    const transactionID: TransactionID = createTransactionID();
    const copyTransactionID: TransactionID = transactionID.copy();
    expect(copyTransactionID).to.be.deep.equal(transactionID);
  });
});

export const createTransactionID = () => new TransactionID(STRING_TEST_VALUE);

export const expectTransactionID = (transactionID: TransactionID) =>
  expect(transactionID.getValue()).to.be.equal(STRING_TEST_VALUE);
