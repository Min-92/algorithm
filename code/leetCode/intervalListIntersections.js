/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

const getIntersection = (a, b) => {
    const start = Math.max(a[0], b[0]);
    const end = Math.min(a[1], b[1]);

    return start <= end ? [start, end] : null;
};

var intervalIntersection = function (A, B) {
    let ai = 0;
    let bi = 0;

    const result = [];

    while (ai < A.length && bi < B.length) {
        const a = A[ai];
        const b = B[bi];

        const intersection = getIntersection(a, b);

        if (intersection) {
            result.push(intersection);
        }

        if (a[1] < b[1]) {
            ai++;
            continue;
        }

        if (b[1] < a[1]) {
            bi++;
            continue;
        }

        ai++;
        bi++;
    }

    return result;
};
