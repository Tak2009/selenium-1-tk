// const assert = require('assert');
const multi = require('../test.js').multi;
const expect = require('chai').expect;

describe('正常系', () => {
	it('2, 3', () => {
        expect(multi(2,3)).to.equal(6, '戻り値は6');
        expect(multi(3,3)).to.equal(9, '戻り値は6');
	});
});