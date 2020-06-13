// 1차
const getObj = (arr) => {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]]) {
            result[arr[i]]++;
        } else {
            result[arr[i]] = 1;
        }
    }
    return result;
};

var intersect = function (nums1, nums2) {
    const obj1 = getObj(nums1);
    const obj2 = getObj(nums2);

    const keys = Object.keys(obj1);

    const result = [];

    for (let i = 0; i < keys.length; i++) {
        const count1 = obj1[keys[i]] || 0;
        const count2 = obj2[keys[i]] || 0;

        const count = count1 <= count2 ? count1 : count2;
        for (let j = 0; j < count; j++) {
            result.push(keys[i]);
        }
    }
    return result;
};

//2차
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const result = [];

    let index1 = 0;
    let index2 = 0;
    while (true) {
        if (nums1[index1] === undefined || nums2[index2] === undefined) {
            break;
        }

        if (nums1[index1] === nums2[index2]) {
            result.push(nums1[index1]);
            index1++;
            index2++;
        } else if (nums1[index1] < nums2[index2]) {
            index1++;
        } else {
            index2++;
        }
    }

    return result;
};
