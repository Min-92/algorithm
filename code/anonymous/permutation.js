const getPermutation = (input) => {
  const result = [];

  const permute = (arr, perm = []) => {
    if (arr.length === 0) {
      result.push(perm);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.splice(i, 1);
        permute([...curr], [...perm, ...next]);
      }
    }
  };
  permute(input);

  return result;
};

console.log(getPermutation([1, 2, 3, 4]));
