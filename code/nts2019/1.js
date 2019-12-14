function solution(a, b, budget) {
    let answer = 0;
    
    if(budget%a === 0) answer++;
    if(budget%b === 0) answer++;

    for(let i = 0 ; i < budget/a -1; i++){
        let c = budget - a*(i+1);

        if(c%b === 0) answer++;
    }

    
    
    return answer;
}


console.log(solution(3000,5000,23000))
// console.log(solution(3,1,6))