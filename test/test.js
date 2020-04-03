const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
//pattern 1
const math = require('../math.js'); 
////pattern2
// const math = require('../math.js').func
////pattern3
// const math = require('../math.js')


//// BDD expect
describe('計算確認 with expect', () => {
	it('掛け算 expect', () => {
        expect(math.multi(2, 3)).to.equal(6, '戻り値は6');
    });
    it('割り算 expect', () => {
        expect(math.div(6, 3)).to.equal(2, '戻り値は2');
	});
});

////BDD should
describe('計算確認 with should', () => {
    it('掛け算 should', () => {
        math.multi(2, 3).should.equal(6,'戻り値は6')
    });
    it('割り算 should', () => {
        math.div(6, 3).should.equal(2,'戻り値は2')
    });
});

//// TDD suiteは　BDD interfaceではエラーになる
suite('計算確認　with assert', ()=> {
      test('掛け算 assert', () => {
        assert.equal(6, math.multi(2, 3), '戻り値は6');
      });
      test('割り算 assert', () => {
        assert.equal(2, math.div(6, 2), '戻り値は3');
      });
});

// TDD 
assert.equal(math.multi(2,  3), 6, '戻り値は6');
assert.equal(math.div(6,  3), 2, '戻り値は2');



//////Array Test
//// BDD expect
expect(math.numbers).to.be.an('array').that.includes(2);
expect(math.numbers).to.have.lengthOf(5);

//// BDD should
math.numbers.should.be.an('array').that.includes(2);
math.numbers.should.have.lengthOf(5);

//// TDD
assert.isArray(math.numbers, 'is array of numbers');
assert.include(math.numbers, 2, 'array contains 2');
assert.lengthOf(math.numbers, 5, 'array contains 5 numbers');