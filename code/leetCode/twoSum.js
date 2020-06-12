// 1차
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const tt = target - nums[i];

        const result = [i];

        for (let j = i + 1; j < nums.length; j++) {
            if (tt === nums[j]) {
                return [...result, j];
            }
        }
    }
};

// 2차
var twoSum = function (nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]].push(i);
            continue;
        }

        obj[nums[i]] = [i];
    }

    for (let i = 0; i < nums.length; i++) {
        const tt = target - nums[i];
        const result = [i];

        if (!obj[tt]) {
            continue;
        }

        if (obj[tt]) {
            if (obj[tt].length === 1) {
                if (i === obj[tt][0]) {
                    continue;
                }
                return [...result, obj[tt][0]];
            }

            if (obj[tt][0] === result[0]) {
                return [...result, obj[tt][1]];
            }
        }
    }
};
