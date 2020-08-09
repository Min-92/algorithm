/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    const length = nums.length;

    if (!length) {
        return 0;
    }

    let count = 0;

    let start = 0;
    let end = 0;
    let odd = 0;

    while (end < length) {
        if (nums[end] % 2 === 1) {
            odd++;
        }

        if (odd === k) {
            let cl = 1;
            let cr = 1;

            while (end < length - 1 && nums[end + 1] % 2 === 0) {
                cr++;
                end++;
            }

            while (start < end && nums[start] % 2 === 0) {
                start++;
                cl++;
            }

            count += cl * cr;
            start++;
            odd--;
        }

        end++;
    }

    return count;
};
