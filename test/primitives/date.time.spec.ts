import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {DateTime} from '../../src/primitives/date.time';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('DateTime', () => {
  it('test string constructor and getter', () => {
    const dateTime: DateTime = createDateTime();
    expectDateTime(dateTime);
  });

  it('test date time constructor and getter', () => {
    const dateTime: DateTime = new DateTime(createDateTime());
    expectDateTime(dateTime);
  });

  it('test copy', () => {
    const dateTime: DateTime = createDateTime();
    const copyDateTime: DateTime = dateTime.copy();
    expect(copyDateTime).to.be.deep.equal(dateTime);
  });
});

export const createDateTime = () => new DateTime(STRING_TEST_VALUE);

export const expectDateTime = (dateTime: DateTime) =>
  expect(dateTime.getValue()).to.be.equal(STRING_TEST_VALUE);
