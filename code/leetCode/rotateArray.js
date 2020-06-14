var rotate = function (nums, k) {
    const count = k % nums.length;
    const rest = nums.splice(0, nums.length - count);
    nums.splice(nums.length, 0, ...rest);
};
