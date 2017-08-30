import { Sample } from '../src/sample';

import * as assert from 'assert';

describe('Sample', () => {
    let sut: Sample;

    beforeEach(() => {
        sut = new Sample();
    });

    describe('.statusは、', () => {
        it('trueであるべき', () => {
            assert(sut.status === true);
        });
    });

    describe('#say()は、', () => {
        it('"Hello TDDBC!"が返ってくるべき', () => {
            assert(sut.say() === 'Hello TDDBC!');
        });
    });
});
