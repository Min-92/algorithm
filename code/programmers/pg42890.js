function negative(arr) {
    const result = [];
    for (let j = 0; j < arr[0].length; j++) {
        result.push([]);
        for (let i = 0; i < arr.length; i++) {
            result[j].push(arr[i][j]);
        }
    }
    return result;
}

const q = [];
let arr = [];
const ans = [];

function solution(relation) {
    arr = negative(relation);

    for (let i = 0; i < arr.length; i++) {
        q.push([i])
    }
    while (q.length) {
        bfs();
    }


    return ans.length;
}

function bfs() {
    const cur = q.shift();

    const res = validCandidate(cur);
    if (res) {
        if(checkExist(cur)) return ans.push(cur);
        return;
    }
    let i = cur[cur.length - 1] + 1;
    for (i; i < arr.length; i++) {
        q.push([...cur, i]);
    }
}

function checkExist(arr) {
    const result = true;
    for (let val of ans) {
        let obj = {};
        for (let innerVal of val) {
            obj[innerVal] = true;
        }

        for (let innerArr of arr) {
            delete obj[innerArr];
        }

        if (!Object.keys(obj).length) return false;

    }

    return result;

}


function makeKey(com) {
    const result = [];
    for (let i = 0; i < arr[0].length; i++) {
        let str = '';

        for (let val of com) {
            str += `${arr[val][i]}`
        }

        result.push(str);

    }
    return result;
}

function validCandidate(com) {
    const obj = {};
    const keys = makeKey(com);

    keys.forEach(elem => {
        obj[elem] = 1;
    })

    if (arr[0].length === Object.keys(obj).length) {
        return true;
    } else {
        return false;
    }

}


solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]);



