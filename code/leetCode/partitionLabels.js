/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    if (!S || !S.length) {
        return "";
    }

    const lastIndex = {};

    for (let i = 0; i < S.length; i++) {
        lastIndex[S[i]] = i;
    }

    const res = [{ s: 0, e: 0, len: 0 }];

    res[0].s = 0;
    res[0].e = lastIndex[S[0]];
    res[0].len++;

    for (let i = 1; i < S.length; i++) {
        const resIndex = res.length - 1;
        const current = S[i];

        if (i > res[resIndex].e) {
            res.push({
                s: i,
                e: lastIndex[current],
                len: 1,
            });
            continue;
        }

        if (lastIndex[current] > res[resIndex].e) {
            res[resIndex].e = lastIndex[current];
            res[resIndex].len++;
            continue;
        }

        if (lastIndex[current] <= res[resIndex].e) {
            res[resIndex].len++;
            continue;
        }
    }

    return res.map((element) => element.len);
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
