import {Sample} from '../src/sample';

import * as assert from 'power-assert';

describe('Sample', () => {
    let sut: Sample;

    beforeEach(() => {
        sut = new Sample();
    });

    describe('.status', () => {
        it('は、trueであるべき', () => {
            assert.ok(sut.status === true);
        });
    });

    describe('#say()', () => {
        it('は、"Hello TDDBC!"が返ってくるべき', () => {
            assert.equal(sut.say() , 'Hello TDDBC!');
        });
    });
});
