
range = require('./');

var test = function (str, expected) {
	try {
		var result = range(str);
		var diff = result.filter(function (e,i) { return e === expected[i]; });
		if (result.length === expected.length && diff.length === expected.length)
		{
			console.log('OK', str, result);
		}
		else
		{
			console.log('FAIL', str, result);
		}
	} catch(e) {
		if (expected === null)
		{
			console.log('OK', e);
		}
		else
		{
			console.log('FAIL', e);
		}
	}
}

test('1-3,5-7,9', [1,2,3,5,6,7,9]);
test('1-3', [1,2,3]);
test('1',[1]);
test('',[]);
test('1-3-5', null);
