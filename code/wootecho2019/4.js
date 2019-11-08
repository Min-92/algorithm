const getSum = (num) => {
    let ma = 0;
    ma += Math.floor(num/100);
    ma += Math.floor(num%100/10);
    ma += Math.floor(num%10);
    return ma;
}

const getMul = (num) => {
    let ma = 1;

    if(num >= 100){
        ma = ma * Math.floor(num/100);
    }
    if(num >= 10){
        ma = ma * Math.floor(num%100/10);
    }
    
    ma = ma * (num%10);
    return ma;
}

const solution = (pobi, crong) => {
    let answer = 0;
    if((pobi[1] - pobi[0]) !== 1) return -1;
    if((crong[1] - crong[0]) !== 1) return -1;
    let max1 = 0;
    let max2 = 0;

    for(let i = 0; i < pobi.length ; i++){
        const ma1 =Math.max( getSum(pobi[i]), getMul(pobi[i]));
        const ma2 =Math.max( getSum(crong[i]), getMul(crong[i]));
        
        max1 = Math.max(ma1, max1);
        max2 = Math.max(ma2, max2);
    }

    if(max1 > max2) answer = 1;
    if(max1 < max2) answer = 2;

    return answer;
}

const arr1 = [97,98];
const arr2 = [197,198];

const arr3 = [131,132];
const arr4 = [211,212];

const arr5 = [99,102];
const arr6 = [211,212];

console.log(solution(arr1,arr2));
console.log(solution(arr3,arr4));
console.log(solution(arr5,arr6));

// console.log(411/100);
// console.log(400%100/10);
// console.log(400%10);
