/**
 * @param {number[][]} grid
 * @return {number}
 */

const dfs = (i, j, area, map, visited) => {
    if (!visited[i]) {
        visited[i] = [];
    }

    visited[i][j] = true;
    area++;

    const near = [
        [i - 1, j],
        [i, j - 1],
        [i + 1, j],
        [i, j + 1],
    ];

    near.forEach((element) => {
        const [x, y] = element;

        if ((visited[x] && visited[x][y]) || !map[x] || !map[x][y]) {
            return;
        }

        area = dfs(x, y, area, map, visited);
    });

    return area;
};

var maxAreaOfIsland = function (grid) {
    let max = 0;
    const visited = [];

    for (let i = 0; i < grid.length; i++) {
        if (!visited[i]) {
            visited[i] = [];
        }

        for (let j = 0; j < grid[i].length; j++) {
            const cur = grid[i][j];

            if (cur === 0 || visited[i][j]) {
                continue;
            }

            const area = dfs(i, j, 0, grid, visited);

            max = Math.max(area, max);
        }
    }

    return max;
};

console.log(
    maxAreaOfIsland([
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
    ])
);
