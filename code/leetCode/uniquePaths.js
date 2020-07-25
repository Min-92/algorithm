/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    if (!i) {
      arr[i] = [1];
    } else {
      arr[i] = [arr[i - 1][0]];
    }

    for (let j = 1; j < n; j++) {
      let result = arr[i][j - 1];

      if (i) {
        result += arr[i - 1][j];
      }

      arr[i][j] = result;
    }
  }

  return arr[m - 1][n - 1];
};
