const comp = (a, b) => {
    return b - a;
}

function solution(prices, discounts) {
    var answer = 0;

    prices.sort(comp);
    discounts.sort(comp);

    for(let i = 0 ; i < prices.length; i++){
        let price = prices[i];
        if(discounts[i]) price = price * (100 - discounts[i])/100;

        answer += price

    }

    return answer;
}


const prices1 = [13000, 88000, 10000];
const prices2 = [32000, 18000, 42500];
const prices3 = [5000, 150000, 42500];

const dis1 = [30, 20];
const dis2 = [50, 20, 65];
const dis3 = [100, 100, 1, 1];


console.log(solution(prices1, dis1));
console.log(solution(prices2, dis2));
console.log(solution(prices3, dis3));
