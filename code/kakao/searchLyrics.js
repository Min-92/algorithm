const getTrie = (str, len, trie) => {
  const tr = trie ? trie : { count: 0 };

  tr.count++;

  const code = str[0].charCodeAt() - 97;

  if (tr[code]) {
    tr[code].count++;
  } else {
    tr[code] = {
      count: 1,
    };
  }

  let currentNode = tr[code];

  for (let i = 1; i < len; i++) {
    const curChar = str[i];
    const curCode = curChar.charCodeAt() - 97;

    if (curChar === "?") {
      break;
    }

    if (currentNode[curCode]) {
      currentNode[curCode].count++;

      currentNode = currentNode[curCode];

      continue;
    }

    currentNode[curCode] = {
      count: 1,
    };
    currentNode = currentNode[curCode];
  }

  return tr;
};

const getCount = (str, trie) => {
  const st = str.replace(/\?*/g, "");

  if (!trie) {
    return 0;
  }

  if (!st.length) {
    return trie.count;
  }

  const code = st[0].charCodeAt() - 97;

  if (!trie[code]) {
    return 0;
  }

  let currentNode = trie[code];

  for (let i = 1; i < st.length; i++) {
    const curCode = str[i].charCodeAt() - 97;

    if (!currentNode[curCode]) {
      return 0;
    }

    currentNode = currentNode[curCode];
  }

  return currentNode.count;
};

function solution(words, queries) {
  const trie = [];
  const rTrie = [];

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    const len = cur.length;

    trie[len] = getTrie(cur, len, trie[len]);
    rTrie[len] = getTrie(cur.split("").reverse().join(""), len, rTrie[len]);
  }

  const ans = [];

  for (let i = 0; i < queries.length; i++) {
    const current = queries[i];
    const startQ = current[0] === "?" ? true : false;

    if (startQ) {
      const rCurrent = current.split("").reverse().join("");

      ans[i] = getCount(rCurrent, rTrie[rCurrent.length]);
      continue;
    }

    ans[i] = getCount(current, trie[current.length]);
  }

  return ans;
}
