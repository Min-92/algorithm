/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
	if (n <= 1) {
		return 1;
	}

	const arr = [1, 1];

	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	return arr[n];
};
