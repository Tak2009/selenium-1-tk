// const assert = require('assert');
const expect = require('chai').expect;
//pattern 1
const math = require('../math.js'); 
////pattern2
// const math = require('../math.js').func
////pattern3
// const math = require('../math.js')


describe('正常系', () => {
	it('掛け算', () => {
        expect(math.multi(2,3)).to.equal(6, '戻り値は6');
    });
    it('割り算', () => {
        expect(math.div(6,3)).to.equal(2, '戻り値は2');
	});
});