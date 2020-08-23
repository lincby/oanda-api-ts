import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {StringPrimitive} from '../../src';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('StringPrimitives', () => {
  it('test constructor and getter', () => {
    const stringPrimitive: StringPrimitive = new StringPrimitive(
      STRING_TEST_VALUE
    );
    expect(stringPrimitive.getValue()).to.be.equal(STRING_TEST_VALUE);
  });
});
