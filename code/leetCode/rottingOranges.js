/**
 * @param {number[][]} grid
 * @return {number}
 */
const getNext = (current, grid, discovered) => {
    const { i, j } = current;
    const arr = [
        [i, j + 1],
        [i + 1, j],
        [i - 1, j],
        [i, j - 1],
    ];

    const list = [];
    arr.forEach((element) => {
        const [i, j] = element;

        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return;
        }

        if (grid[i][j] === 0 || grid[i][j] === 2 || discovered[i][j]) {
            return;
        }

        list.push({ i, j, step: current.step + 1 });
    });

    return list;
};

var orangesRotting = function (grid) {
    const q = [];
    let normalCount = 0;
    const discovered = [];

    for (let i = 0; i < grid.length; i++) {
        discovered[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            discovered[i][j] = 0;
            const current = grid[i][j];
            if (current === 2) {
                q.push({
                    i,
                    j,
                    step: 0,
                });
            }

            if (current === 1) {
                normalCount++;
            }
        }
    }
    if (!normalCount) {
        return 0;
    }

    if (!q.length) {
        return -1;
    }

    let max = 0;

    while (q.length) {
        const current = q.shift();
        max = Math.max(current.step, max);
        if (grid[current.i][current.j] === 1) {
            normalCount--;
        }

        const next = getNext(current, grid, discovered);

        next.forEach(({ i, j, step }) => {
            if (!discovered[i][j]) {
                q.push({ i, j, step });
                discovered[i][j] = true;
            }
        });
    }

    return normalCount ? -1 : max;
};
