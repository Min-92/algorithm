const getParsedStr = (str) => {
    const result = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ];

    for (let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - 97;
        result[index]++;
    }

    return result.toString();
};

var groupAnagrams = function (strs) {
    const resultObj = {};

    for (let i = 0; i < strs.length; i++) {
        const parsedStr = getParsedStr(strs[i]);
        if (resultObj[parsedStr]) {
            resultObj[parsedStr].push(strs[i]);
            continue;
        }

        resultObj[parsedStr] = [strs[i]];
    }

    const result = [];

    for (const key in resultObj) {
        result.push(resultObj[key]);
    }

    return result;
};
