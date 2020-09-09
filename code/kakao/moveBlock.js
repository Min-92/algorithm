const getNextMoves = (current, board, finded) => {
  const near = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const nexts = [];
  const [[i, j], [ii, jj], step] = current;
  near.forEach(([x, y]) => {
    const nextI = i + x;
    const nextJ = j + y;
    const nextII = ii + x;
    const nextJJ = jj + y;

    if (!board[nextI] || !board[nextII]) {
      return;
    }

    if (
      board[nextI][nextJ] == undefined ||
      board[nextI][nextJ] == 1 ||
      board[nextII][nextJJ] == undefined ||
      board[nextII][nextJJ] == 1
    ) {
      return;
    }
    const n = [
      ...[
        [nextI, nextJ],
        [nextII, nextJJ],
      ].sort(),
      step + 1,
    ];

    if (finded[[n[0], n[1]].toString()]) {
      return;
    }

    finded[[n[0], n[1]].toString()] = true;

    nexts.push(n);
  });

  return nexts;
};

const getNextRotations = (current, board, finded) => {
  const [[i, j], [ii, jj], step] = current;
  const result = [];

  if (i === ii) {
    if (board[i - 1]) {
      if (board[i - 1][j] === 0 && board[i - 1][jj] === 0) {
        result.push([
          ...[
            [i, j],
            [i - 1, j],
          ].sort(),
          step + 1,
        ]);
        result.push([
          ...[
            [ii, jj],
            [i - 1, jj],
          ].sort(),
          step + 1,
        ]);
      }
    }

    if (board[i + 1]) {
      if (board[i + 1][j] === 0 && board[i + 1][jj] === 0) {
        result.push([
          ...[
            [i, j],
            [i + 1, j],
          ].sort(),
          step + 1,
        ]);
        result.push([
          ...[
            [ii, jj],
            [i + 1, jj],
          ].sort(),
          step + 1,
        ]);
      }
    }

    const arr = result.filter(([a, b, i]) => {
      return !finded[[a, b].toString()];
    });
    arr.forEach(([a, b, i]) => {
      finded[[a, b].toString()] = true;
    });
    return arr;
  }

  if (j === jj) {
    if (board[j - 1]) {
      if (board[i][j - 1] === 0 && board[ii][j - 1] === 0) {
        result.push([
          ...[
            [i, j],
            [i, j - 1],
          ].sort(),
          step + 1,
        ]);
        result.push([
          ...[
            [ii, jj],
            [ii, j - 1],
          ].sort(),
          step + 1,
        ]);
      }
    }

    if (board[j + 1]) {
      if (board[i][j + 1] === 0 && board[ii][j + 1] === 0) {
        result.push([
          ...[
            [i, j],
            [i, j + 1],
          ].sort(),
          step + 1,
        ]);
        result.push([
          ...[
            [ii, jj],
            [ii, j + 1],
          ].sort(),
          step + 1,
        ]);
      }
    }

    const arr = result.filter(([a, b, i]) => {
      return !finded[[a, b].toString()];
    });
    arr.forEach(([a, b, i]) => {
      finded[[a, b].toString()] = true;
    });
    return arr;
  }
};

const getNexts = (current, board, finded) => {
  return [
    ...getNextMoves(current, board, finded),
    ...getNextRotations(current, board, finded),
  ];
};

function solution(board) {
  const start = [[0, 0], [0, 1], 0];
  const goal = board.length - 1;
  const finded = {};
  const q = getNexts(start, board, finded);
  while (q.length) {
    const current = q.shift();

    const [[x, y], [xx, yy], step] = current;

    if ((x === goal && y === goal) || (xx === goal && yy === goal)) {
      return step;
    }

    q.push(...getNexts(current, board, finded));
  }
}

console.log(
  solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ])
);
