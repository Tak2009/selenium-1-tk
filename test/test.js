const assert = require('assert');
const testFile = require('./test.js');

describe('正常系', function() {
	it('2, 3', function() {
		expect(multi(2,3)).to.equal(6, '戻り値は6');
	});
});