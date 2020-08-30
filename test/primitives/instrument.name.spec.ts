import {describe} from 'mocha';
import {it} from 'mocha';
import {expect} from 'chai';
import {InstrumentName} from '../../src/primitives/instrument.name';
import {STRING_TEST_VALUE} from '../test.utils.spec';

describe('InstrumentName', () => {
    it('test string constructor and getter', () => {
        const instrumentName: InstrumentName = createInstrumentName();
        expectInstrumentName(instrumentName);
    });

    it('test instrument name constructor and getter', () => {
        const instrumentName: InstrumentName = new InstrumentName(createInstrumentName());
        expectInstrumentName(instrumentName);
    });

    it('test copy', () => {
        const instrumentName: InstrumentName = createInstrumentName();
        const copyInstrumentName: InstrumentName = instrumentName.copy();
        expect(copyInstrumentName).to.be.deep.equal(instrumentName);
    });
});

export const createInstrumentName = () => new InstrumentName(STRING_TEST_VALUE);

export const expectInstrumentName = (instrumentName: InstrumentName) =>
    expect(instrumentName.getValue()).to.be.equal(STRING_TEST_VALUE);
