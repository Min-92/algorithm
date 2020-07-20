/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	if (!nums.length) {
		return 0;
	}

	let max = nums[0];
	let mem = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const cur = nums[i];

		mem = Math.max(mem + cur, cur);
		max = Math.max(mem, max);
	}

	return max;
};
