const rotate = (keys, m) => {
  const arr = [];

  for (let i = 0; i < keys.length; i++) {
    const [x, y] = keys[i];

    arr.push([y, m - x]);
  }
  return arr;
};

const canOpen = (keys, lock, xi, yi, holes) => {
  let fitCount = 0;

  for (let i = 0; i < keys.length; i++) {
    const [xx, yy] = keys[i];
    const x = xx + xi;
    const y = yy + yi;

    if (!lock[x]) {
      continue;
    }

    if (lock[x][y] === 0) {
      fitCount++;
      continue;
    }

    if (lock[x][y] === 1) {
      return false;
    }
  }

  return fitCount === holes;
};

function solution(key, lock) {
  let keys = [];
  let lockHoles = 0;
  let firstHole = null;

  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock[i].length; j++) {
      if (lock[i][j] === 0) {
        if (!firstHole) {
          firstHole = [i, j];
        }
        lockHoles++;
      }
    }
  }

  if (lockHoles === 0) {
    return true;
  }

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key[i].length; j++) {
      if (key[i][j] === 1) {
        keys.push([i, j]);
      }
    }
  }

  const keyPins = keys.length;

  if (keyPins < lockHoles) {
    return false;
  }

  if (keyPins === 1 && lockHoles === 1) {
    return true;
  }

  const rotatedKeys = [keys];

  for (let i = 0; i < 3; i++) {
    rotatedKeys.push(
      rotate(rotatedKeys[rotatedKeys.length - 1], key.length - 1)
    );
  }

  for (let kk = 0; kk < 4; kk++) {
    const keys = rotatedKeys[kk];

    for (let i = 0; i < keys.length; i++) {
      const [x, y] = keys[i];
      const xi = firstHole[0] - x;
      const yi = firstHole[1] - y;

      const opened = canOpen(keys, lock, xi, yi, lockHoles);

      if (opened) {
        return true;
      }
    }
  }

  return false;
}
