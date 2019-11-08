const solution = (money) => {
    const answer = [];
    let left = money;
    const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    for (let i = 0; i < cash.length; i++) {
        answer.push(Math.floor(left / cash[i]));
        left = left % cash[i];
    }

    return answer
}


const mo1 = 50237;
const mo2 = 15000;

console.log(solution(mo1));
console.log(solution(mo2));