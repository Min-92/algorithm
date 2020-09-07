const permutator = (inputArr) => {
  const result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const getWalls = (n, weak) => {
  const arr = [...weak];

  const result = [[...arr]];

  for (let i = 1; i < arr.length; i++) {
    arr.push(arr.shift() + n);
    result.push([...arr]);
  }

  return result;
};

const getCovered = (wall, dist) => {
  const d = [...dist];

  let cur = -1;
  let count = 0;
  for (let i = 0; i < wall.length; i++) {
    const w = wall[i];
    if (cur >= w) {
      continue;
    }

    if (cur < w) {
      cur = w;
    }

    if (!d.length) {
      return false;
    }
    const a = d.shift();

    cur += a;
    count++;
  }

  return count;
};

function solution(n, weak, dist) {
  const walls = getWalls(n, weak);

  let min = dist.length + 1;

  walls.forEach((wall) => {
    const permutation = permutator(dist);

    for (let i = 0; i < permutation.length; i++) {
      const curDist = permutation[i];

      const covered = getCovered(wall, curDist);
      if (covered) {
        min = Math.min(covered, min);
      }
    }
  });

  return min === dist.length + 1 ? -1 : min;
}
