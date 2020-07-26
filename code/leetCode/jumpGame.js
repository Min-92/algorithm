/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	if (nums.length === 1) {
		return true;
	}

	const dp = [true];
	for (let i = 0; i < nums.length - 1; i++) {
		if (dp[i]) {
			for (let j = 1; j <= nums[i]; j++) {
				dp[i + j] = true;
			}
		}
	}

	return !!dp[nums.length - 1];
};
