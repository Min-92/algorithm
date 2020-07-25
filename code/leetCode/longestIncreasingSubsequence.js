/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0;
  }

  const len = [];
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    len[i] = 1;

    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < current) {
        len[i] = Math.max(len[i], len[j] + 1);
        max = Math.max(max, len[i]);
      }
    }
  }

  return max;
};
