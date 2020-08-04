/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const arr = [...this.arr];

    const result = [];

    while (arr.length) {
        const len = arr.length;

        const index = Math.floor(Math.random() * len);

        result.push(arr.splice(index, 1));
    }

    return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
