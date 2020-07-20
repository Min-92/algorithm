/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (!prices.length) {
		return 0;
	}

	let min = prices[0];
	let venefit = 0;
	for (let i = 1; i < prices.length; i++) {
		const cur = prices[i];
		const ven = cur - min;

		if (venefit < ven) {
			venefit = ven;
		}

		if (cur < min) {
			min = cur;
		}
	}

	return venefit;
};
