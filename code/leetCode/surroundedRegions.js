/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const dfs = (i, j, board, visited) => {
    if (!visited[i]) {
        visited[i] = [];
    }
    visited[i][j] = true;

    const near = [
        [i, j + 1],
        [i + 1, j],
        [i - 1, j],
        [i, j - 1],
    ];

    near.forEach((element) => {
        const [x, y] = element;

        if (x < 0 || y < 0 || x > board.length - 1 || y > board[x].length - 1) {
            return;
        }
        const cur = board[x][y];
        if (cur === "X") {
            return;
        }

        if (visited[x] && visited[x][y]) {
            return;
        }

        dfs(x, y, board, visited);
    });
};

var solve = function (board) {
    if (!board[0]) {
        return;
    }

    const visited = [];

    for (let i = 0; i < board.length; i++) {
        const j = 0;
        const cur = board[i][j];

        if (cur === "O") {
            if (visited[i] && visited[i][j]) {
                continue;
            }

            dfs(i, j, board, visited);
        }
    }
    for (let i = 0; i < board.length; i++) {
        const j = board[i].length - 1;
        const cur = board[i][j];

        if (cur === "O") {
            if (visited[i] && visited[i][j]) {
                continue;
            }

            dfs(i, j, board, visited);
        }
    }
    for (let j = 1; j < board[0].length; j++) {
        const i = 0;
        const cur = board[i][j];

        if (cur === "O") {
            if (visited[i] && visited[i][j]) {
                continue;
            }

            dfs(i, j, board, visited);
        }
    }
    for (let j = 0; j < board[0].length; j++) {
        const i = board.length - 1;
        const cur = board[i][j];

        if (cur === "O") {
            if (visited[i] && visited[i][j]) {
                continue;
            }

            dfs(i, j, board, visited);
        }
    }

    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < board[i].length - 1; j++) {
            const cur = board[i][j];

            if (cur === "X") {
                continue;
            }

            if (cur === "O") {
                if (visited[i] && visited[i][j]) {
                    continue;
                }

                board[i][j] = "X";
            }
        }
    }

    return board;
};
