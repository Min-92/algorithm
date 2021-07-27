/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const convert = (arr) => {
    if (!arr) {
        return null;
    }

    const length = arr.length;

    if (!length) {
        return null;
    }

    if (length > 3) {
        const mid = Math.floor(length / 2);

        return new TreeNode(
            arr[mid],
            convert(arr.slice(0, mid)),
            convert(arr.slice(mid + 1, length))
        );
    }

    if (length === 3) {
        return new TreeNode(arr[1], new TreeNode(arr[0]), new TreeNode(arr[2]));
    }

    if (length === 2) {
        return new TreeNode(arr[1], new TreeNode(arr[0]));
    }

    if (length === 1) {
        return new TreeNode(arr[0]);
    }
};

var sortedArrayToBST = function (nums) {
    return convert(nums);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
