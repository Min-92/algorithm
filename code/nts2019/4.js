// function solution(n, k) {

//     if (k > n) return 0;

//     if(k === n){
//         let ans = 1;
//         for(let i = 2 ; i <= n; i++ ){
//             ans = ans*i;
//         }
//         return ans%10007;
//     }

//     var answer = 2;
//     return answer;
// }


// console.log(solution(4, 4))



let N;
let K;
let count;

const dp = (a, b, x, y, rookCount) => {
    if (rookCount === K) {
        count++;
        return;
    }
    
    for (let i = a + 1; i < N; i++) {
        if (x[i] === true) continue;
        for (let j = 0; j < N; j++) {
            if (y[j] === true) continue;

            const xObj = Object.assign({}, x);
            const yObj = Object.assign({}, y);
            
            xObj[i] = true;
            yObj[j] = true;

            dp(i, j, xObj, yObj, rookCount + 1)
        }

    }

}

function solution(n, k) {
    if (k > n) return 0;

    N = n;
    K = k;
    count = 0;

    const xObj = {};
    const yObj = {};

    let rookCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            x = Object.assign({}, xObj);
            y = Object.assign({}, yObj);
            
            x[i] = true;
            y[i] = true;
            dp(i, j, x, y, rookCount + 1);
        }
    }

    // return count%10007;
    return count;
}


// console.log(solution(3, 2)) // 18
// console.log(solution(3, 3)) // 6
// console.log(solution(2, 2)) // 2
// console.log(solution(2, 1)) // 4
// console.log(solution(4, 4)) // 24
const arr = [64,1568, 18816, 117600, 376320, 564480, 322560, 40320] 

for(let i = 1; i <= 8; i++){
    console.log(solution(8,i) === arr[i-1])
}