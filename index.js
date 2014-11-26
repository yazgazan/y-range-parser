
module.exports = function (str, rsep, sep) {
	if (sep === undefined)
	{
		sep = ',';
	}
	if (rsep === undefined)
	{
		rsep = '-';
	}
	var ret = [];

	var ranges = str.split(sep);

	for (var i = 0; i < ranges.length; i++)
	{
		if (ranges[i].length === 0)
		{
			continue;
		}
		var range = ranges[i].split(rsep);
		console.assert(range.length !== 0, 'invalide range string (empty range)');
		console.assert(range.length <= 2, 'invalide range string (range.length > 2)');
		if (range.length === 1)
		{
			console.assert(!isNaN(+range[0]), 'invalide range string (NaN)');
			ret.push(+range[0]);
		}
		else
		{
			console.assert(!isNaN(+range[0]), 'invalide range string (NaN)');
			console.assert(!isNaN(+range[1]), 'invalide range string (NaN)');
			for (var j = +range[0]; j <= +range[1]; j++)
			{
				ret.push(j);
			}
		}
	}

	ret = ret.sort().filter(function (e,i,a) { return a[i - 1] !== e; });

	return ret;
};

module.exports.generate = function (rsep, sep) {
	if (sep === undefined)
	{
		sep = ',';
	}
	if (rsep === undefined)
	{
		rsep = '-';
	}
	return function (str, r, s) {
		if (r === undefined)
		{
			r = rsep;
		}
		if (s === undefined)
		{
			s = sep;
		}
		return module.exports(str, r, s);
	};
};

